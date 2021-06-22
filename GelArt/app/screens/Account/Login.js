/*import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  return (
    <ScrollView>
      <Image />
      <View>
        <Text>Create account</Text>
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <Text>Social Login</Text>
    </ScrollView>
  );
}

function CreateAccount(props) {
  const navigation = useNavigation();
  return (
    <Text>
      Aun no tienes una cuenta{" "}
      <Text onPress={() => navigation.navigate("register")}>Registrate</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
}); */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function Login(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(3,55,114,1)" />
      <ImageBackground
        style={styles.rect}
        source={require("../../../assets/images/Gradient_rXn3Dng.png")}
      >
        <View style={styles.imageColumn}>
          <Image
            source={require("../../../assets/images/LOGO_GELART5.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <ScrollView style={styles.form1}>
          <View style={styles.name1}>
            <EvilIconsIcon name="user" style={styles.icon1}></EvilIconsIcon>
            <TextInput
              placeholder="Cedula / Ruc"
              placeholderTextColor="rgba(255,255,255,1)"
              secureTextEntry={false}
              style={styles.nameInput1}
            ></TextInput>
          </View>
          <View style={styles.password1}>
            <EvilIconsIcon name="lock" style={styles.icon3}></EvilIconsIcon>
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="rgba(255,255,255,1)"
              secureTextEntry={true}
              style={styles.passwordInput1}
            ></TextInput>
          </View>
        </ScrollView>
        <View style={styles.button1Column}>
          <TouchableOpacity
            //onPress={() => props.navigation.navigate("Timeline")}
            style={styles.button1}
          >
            <Text style={styles.text1}>Continue</Text>
          </TouchableOpacity>
          <Text style={styles.noTienesCuenta}>Aun no tienes Cuenta?</Text>
          <Text style={styles.registrate}>Registrate</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rect: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: 200,
    height: "50%",
    borderWidth: 1,
    borderColor: "solid rgba(226,227,232,1)",
    borderRadius: 11,
    backgroundColor: "rgba(230, 230, 230,0.21)",
  },
  form1: {
    marginLeft: "7%",
    marginRight: "7%",
    flex: 1,
  },
  name1: {
    height: 59,
    backgroundColor: "#364057",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "solid rgba(252,250,250,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.36,
    shadowRadius: 0,
    flexDirection: "row",
    marginBottom: 35,
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center",
  },
  nameInput1: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    width: "100%",
    marginRight: 19,
    marginLeft: 13,
    marginTop: 13,
  },
  password1: {
    height: 59,
    backgroundColor: "#364057",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "solid rgba(255,255,255,1)",
    elevation: 5,
    flexDirection: "row",
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 12,
  },
  passwordInput1: {
    height: 30,
    width: "100%",
    color: "rgba(255,255,255,1)",
    //flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14,
  },
  imageColumn: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    height: 55,
    backgroundColor: "rgba(3,55,114,1)",
    borderRadius: 18,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    shadowColor: "rgba(0,0,0,1)",
    /*shadowOffset: {
      width: 3,
      height: 3,
    },*/
    width: "100%",
    elevation: 5,
    shadowOpacity: 0.24,
    shadowRadius: 0,
    overflow: "visible",
    justifyContent: "center",
    marginBottom: 20,
  },
  text1: {
    width: "100%",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
  noTienesCuenta: {
    color: "rgba(255,255,255,1)",
    //fontFamily: "comic-sans-ms-regular",
    marginBottom: 18,
  },
  registrate: {
    color: "rgba(255,255,255,1)",
    textDecorationLine: "underline",
  },
  button1Column: {
    //marginBottom: "40%",
    flex: 1,
    marginLeft: "7%",
    marginRight: "7%",
    marginTop: 10,
    alignItems: "center",
  },
});

export default Login;
