import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import RegisterForm from "../components/Auth/RegisterForm";
import LoginForm from "../components/Auth/LoginForm";
import Toast from "react-native-easy-toast";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  const toastRef = useRef();
  const changeForm = () => setShowLogin(!showLogin);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.root}
    >
      <View style={styles.root}>
        {showLogin ? (
          <LoginForm toastRef={toastRef} changeForm={changeForm} />
        ) : (
          <RegisterForm toastRef={toastRef} changeForm={changeForm} />
        )}
      </View>
      <Toast
        ref={toastRef}
        position="center"
        //opacity={0.9}
        fadeOutDuration={1000}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
