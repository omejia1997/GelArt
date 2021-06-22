//import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from "react";
import Navigation from "./app/navigations/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./app/screens/Account/Login";
import Register from "./app/screens/Account/Register";
import { firebaseApp } from "./app/utils/firebase";
/*import * as firebase from "firebase";*/
//import { StyleSheet, Text, View } from 'react-native';
import AccountStack from "./app/navigations/AccountStack";

export default function App() {
  /*useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);*/
  //return <Navigation />;
  return (
    <NavigationContainer>
      <AccountStack />
    </NavigationContainer>
  );
  //return <Register />;
}
/*
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>*/
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
