import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  ImageBackground,
  Image,
  //TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
//import Toast from "react-native-root-toast";
import userAuth from "../../hooks/userAuth";
import { loginApi } from "../../api/user";
import { formStyles } from "../../styles";
import colors from "../../styles/colors";
//mongodb+srv://admin:gelArt_1997@gelart.ngxco.mongodb.net/gelart?retryWrites=true&w=majority

function LoginForm(props) {
  const { toastRef } = props;
  const { changeForm } = props;
  const [loading, setLoading] = useState(false);
  const { login } = userAuth();

  const formik = useFormik({
    initialValues: defaultFormValue(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        console.log(formData);
        const response = await loginApi(formData);
        if (response.statusCode) throw "Identificador o contraseña incorrecta";
        login(response);
      } catch (error) {
        console.log(error.toString());
        /*Toast.show(error.toString(), {
          position: Toast.positions.CENTER,
          textColor: "blue",
        });*/
        toastRef.current.show(error.toString());
        setLoading(false);
      }
    },
  });

  return (
    <LinearGradient
      colors={["transparent", "rgba(82,145,236,1)"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="rgba(3,55,114,1)" />
      <View style={styles.imageColumn}>
        <Image
          source={require("../../../assets/images/LOGO_GELART5.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <ScrollView style={styles.form1}>
        <View style={[formStyles.containerInput, styles.name1]}>
          <EvilIconsIcon name="user" style={formStyles.icon}></EvilIconsIcon>
          <TextInput
            placeholder="Cedula / Ruc"
            placeholderTextColor={colors.fontLight}
            style={formStyles.input}
            theme={{ colors: { text: colors.fontLight } }}
            onChangeText={(text) => formik.setFieldValue("identifier", text)}
            value={formik.values.identifier}
            error={formik.errors.identifier}
          ></TextInput>
        </View>
        <View style={formStyles.containerInput}>
          <EvilIconsIcon name="lock" style={formStyles.icon}></EvilIconsIcon>
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor={colors.fontLight}
            secureTextEntry
            style={formStyles.input}
            theme={{ colors: { text: colors.fontLight } }}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            value={formik.values.password}
            error={formik.errors.password}
          ></TextInput>
        </View>
      </ScrollView>
      <View style={styles.button1Column}>
        <Button
          loading={loading}
          onPress={formik.handleSubmit}
          color="white"
          style={[formStyles.btnSucess, styles.button1]}
        >
          <Text style={formStyles.textButton}>Continue</Text>
        </Button>
        <Text style={styles.noTienesCuenta}>Aun no tienes Cuenta?</Text>
        <Text style={styles.registrate} onPress={changeForm}>
          Registrate
        </Text>
      </View>
    </LinearGradient>
  );
}

function defaultFormValue() {
  return {
    identifier: "",
    password: "",
  };
}

function validationSchema() {
  return {
    identifier: Yup.string().required(true),
    password: Yup.string().required(true),
  };
}
/*
function CreateAccount(props) {
  const { changeForm } = props;
  return (
    <Text style={styles.registrate} onPress={changeForm}>
      Registrate
    </Text>
  );
}*/

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
    //borderWidth: 1,
    //borderColor: "solid rgba(226,227,232,1)",
    //borderRadius: 11,
    //backgroundColor: "rgba(230, 230, 230,0.21)",
  },
  form1: {
    marginLeft: "7%",
    marginRight: "7%",
    flex: 1,
  },
  name1: {
    marginBottom: 35,
  },

  imageColumn: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
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
    width: "80%",
    marginLeft: "7%",
    marginRight: "7%",
    flex: 1,

    marginTop: 10,
    alignItems: "center",
  },
});

export default LoginForm;
