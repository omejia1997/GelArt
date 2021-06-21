/*import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Register() {
  return (
    <View>
      <Image />
      <View>
        <Text>Registrar form</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});*/
//Imagen source={require("")} resizeMode="contain" />
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function Register(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect2}
          imageStyle={styles.rect2_imageStyle}
          source={require("../../../assets/img/Gradient_tVfztQM.png")}
        >
          <View style={styles.icon8Column}>
            <FontAwesomeIcon
              name="user-circle-o"
              style={styles.icon8}
            ></FontAwesomeIcon>
            <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
            <View style={styles.form}>
              <View style={styles.nameColumn}>
                <View style={styles.name}>
                  <EvilIconsIcon
                    name="user"
                    style={styles.icon5}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Name"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.nameInput}
                  ></TextInput>
                </View>
                <View style={styles.email}>
                  <EvilIconsIcon
                    name="envelope"
                    style={styles.icon6}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.emailInput}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.nameColumnFiller}></View>
              <View style={styles.password}>
                <EvilIconsIcon name="lock" style={styles.icon7}></EvilIconsIcon>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={true}
                  style={styles.passwordInput}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.icon8ColumnFiller}></View>
          <View style={styles.buttonColumn}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Timeline")}
              style={styles.button}
            >
              <Text style={styles.text2}>Continue</Text>
            </TouchableOpacity>
            <Text style={styles.text4}>Terms &amp; Conditions</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 11,
  },
  background: {
    flex: 1,
  },
  rect2: {
    flex: 1,
  },
  rect2_imageStyle: {},
  icon8: {
    color: "rgba(128,128,128,1)",
    fontSize: 145,
    height: 145,
    width: 145,
    marginLeft: 67,
  },
  createAccount: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 29,
    alignSelf: "center",
  },
  form: {
    height: 230,
    marginTop: 48,
  },
  name: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(252,250,250,1)",
    borderStyle: "solid",
    flexDirection: "row",
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center",
  },
  nameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14,
  },
  email: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    marginTop: 27,
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    alignSelf: "center",
  },
  emailInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14,
  },
  nameColumn: {},
  nameColumnFiller: {
    flex: 1,
  },
  password: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    flexDirection: "row",
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 12,
  },
  passwordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14,
  },
  icon8Column: {
    marginTop: 45,
    marginLeft: 41,
    marginRight: 41,
  },
  icon8ColumnFiller: {
    flex: 1,
  },
  button: {
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    borderRadius: 20,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 55,
  },
  text2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
  text4: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "center",
  },
  buttonColumn: {
    marginBottom: 31,
    marginLeft: 41,
    marginRight: 41,
  },
});

export default Register;
