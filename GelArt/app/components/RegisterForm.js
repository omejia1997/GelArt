import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialRadio from "./MaterialRadio";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { validateEmail } from "../utils/validations";
import { size, isEmpty } from "lodash";

function RegisterForm(props) {
  const { toastRef } = props;
  const [formData, setFormData] = useState(defaultFormValue());

  const onSubmit = () => {
    if (
      isEmpty(formData.id) ||
      isEmpty(formData.name) ||
      isEmpty(formData.lastName) ||
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    )
      toastRef.current.show("Debe llenar todos los campos");
    else if (!validateEmail(formData.email))
      toastRef.current.show("El email no es correcto");
    else if (formData.password !== formData.repeatPassword)
      toastRef.current.show("Las contraseñas tienen que ser iguales");
    else if (size(formData.password) < 6)
      toastRef.current.show("la contraseña debe tener al menos 6 caracteres");
    else console.log(formData);
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(3,55,114,1)" />
      <ImageBackground
        style={styles.rect}
        //imageStyle={styles.rect_imageStyle}
        source={require("../../assets/images/Register.png")}
      >
        <View style={styles.image1Column}>
          <Image
            source={require("../../assets/images/LOGO_GELART5.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>

        <ScrollView style={styles.form1}>
          <View style={styles.group2}>
            <View style={styles.cedulaRow}>
              <Text style={styles.cedula}>Cedula</Text>
              <MaterialRadio style={styles.materialRadio}></MaterialRadio>
              <View style={styles.materialRadio2Stack}>
                <MaterialRadio style={styles.materialRadio2}></MaterialRadio>
                <Text style={styles.ruc}>Ruc</Text>
              </View>
            </View>
          </View>
          <View style={styles.name1}>
            <MaterialIconsIcon
              name="perm-identity"
              style={styles.icon1}
            ></MaterialIconsIcon>
            <TextInput
              keyboardType="numeric"
              placeholder="Cedula / Ruc"
              placeholderTextColor="rgba(255,255,255,1)"
              secureTextEntry={false}
              style={styles.nameInput1}
              onChange={(e) => onChange(e, "id")}
            ></TextInput>
          </View>
          <View style={styles.group4}>
            <EvilIconsIcon name="user" style={styles.icon6}></EvilIconsIcon>
            <TextInput
              placeholder="Nombre"
              placeholderTextColor="rgba(255,255,255,1)"
              secureTextEntry={false}
              style={styles.textInput3}
              onChange={(e) => onChange(e, "name")}
            ></TextInput>
          </View>
          <View style={styles.group5}>
            <EvilIconsIcon name="user" style={styles.icon7}></EvilIconsIcon>
            <TextInput
              placeholder="Apellido"
              placeholderTextColor="rgba(255,255,255,1)"
              secureTextEntry={false}
              style={styles.textInput4}
              onChange={(e) => onChange(e, "lastName")}
            ></TextInput>
          </View>
          <View style={styles.group}>
            <EvilIconsIcon name="envelope" style={styles.icon4}></EvilIconsIcon>
            <TextInput
              placeholder="Correo Electronico"
              placeholderTextColor="rgba(255,255,255,1)"
              secureTextEntry={false}
              style={styles.textInput}
              onChange={(e) => onChange(e, "email")}
            ></TextInput>
          </View>
          <View style={styles.group3}>
            <EvilIconsIcon name="lock" style={styles.icon5}></EvilIconsIcon>
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="rgba(255,255,255,1)"
              secureTextEntry={true}
              style={styles.textInput2}
              onChange={(e) => onChange(e, "password")}
            ></TextInput>
          </View>
          <View style={styles.password1}>
            <EvilIconsIcon name="lock" style={styles.icon3}></EvilIconsIcon>
            <TextInput
              placeholder="Repetir Contraseña"
              placeholderTextColor="rgba(255,255,255,1)"
              secureTextEntry={true}
              style={styles.passwordInput1}
              onChange={(e) => onChange(e, "repeatPassword")}
            ></TextInput>
          </View>
        </ScrollView>
        <View style={styles.button1Column}>
          <TouchableOpacity onPress={onSubmit} style={styles.button1}>
            <Text style={styles.registrar}>Registrar</Text>
          </TouchableOpacity>
          <Text style={styles.yaTienesCuenta}>¿Ya tienes cuenta?</Text>
          <GoToLogin />
        </View>
      </ImageBackground>
    </View>
  );
}

function GoToLogin(props) {
  const navigation = useNavigation();
  return (
    <Text
      style={styles.iniciarSesion}
      onPress={() => navigation.navigate("login")}
    >
      Iniciar Sesion
    </Text>
  );
}

function defaultFormValue() {
  return {
    id: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
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
  //rect_imageStyle: {},
  image1: {
    width: 100,
    height: "50%",
    borderWidth: 1,
    borderColor: "solid rgba(226,227,232,1)",
    borderRadius: 11,
    backgroundColor: "rgba(230, 230, 230,0.3)",
  },
  group2: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  cedula: {
    //fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 67,
    fontSize: 20,
  },
  materialRadio: {
    height: 40,
    width: 40,
    marginLeft: 1,
  },
  materialRadio2: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 42,
    top: 0,
  },
  ruc: {
    position: "absolute",
    //fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 22,
    width: 48,
    fontSize: 20,
    textAlign: "center",
  },
  materialRadio2Stack: {
    width: 82,
    height: 40,
    marginLeft: 32,
  },
  cedulaRow: {
    height: 40,
    flexDirection: "row",
  },
  form1: {
    flex: 1,
    marginLeft: "7%",
    marginRight: "7%",
    //height: 402,
    //marginTop: 11,
  },
  name1: {
    height: 59,
    backgroundColor: "#364057",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "solid rgba(252,250,250,1)",
    //borderStyle: "solid",
    //shadowColor: "rgba(0,0,0,1)",
    /*shadowOffset: {
      width: 3,
      height: 3,
    },*/
    elevation: 5,
    //shadowOpacity: 0.36,
    //shadowRadius: 0,
    flexDirection: "row",
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
    flex: 1,
    marginRight: 19,
    marginLeft: 13,
    marginTop: 13,
  },
  group4: {
    height: 59,
    backgroundColor: "#364057",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "solid rgba(252,250,250,1)",
    //borderStyle: "solid",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.36,
    shadowRadius: 0,
    flexDirection: "row",
    marginTop: 8,
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center",
  },
  textInput3: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 19,
    marginLeft: 13,
    marginTop: 13,
  },
  group5: {
    height: 59,
    backgroundColor: "#364057",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "solid rgba(252,250,250,1)",
    //: "solid",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.36,
    shadowRadius: 0,
    flexDirection: "row",
    marginTop: 9,
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center",
  },
  textInput4: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 19,
    marginLeft: 13,
    marginTop: 13,
  },
  group: {
    height: 59,
    backgroundColor: "#364057",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "solid rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.36,
    shadowRadius: 0,
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 10,
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 12,
  },
  textInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14,
  },
  group3: {
    height: 59,
    backgroundColor: "#364057",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "solid rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.36,
    shadowRadius: 0,
    flexDirection: "row",
    marginBottom: 9,
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 12,
  },
  textInput2: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14,
  },
  password1: {
    height: 59,
    backgroundColor: "#364057",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "solid rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.36,
    shadowRadius: 0,
    flexDirection: "row",
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 12,
  },
  passwordInput1: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14,
  },
  groupColumn: {},
  image1Column: {
    marginTop: "2%",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    height: 55,
    width: "100%",
    backgroundColor: "rgba(3,55,114,1)",
    borderRadius: 18,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.24,
    shadowRadius: 0,
    overflow: "visible",
    justifyContent: "center",
    marginBottom: 17,
    marginTop: 10,
  },
  registrar: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
  yaTienesCuenta: {
    color: "rgba(255,255,255,1)",
    //fontFamily: "comic-sans-ms-regular",
    marginBottom: 12,
  },
  iniciarSesion: {
    color: "rgba(255,255,255,1)",
    textDecorationLine: "underline",
  },
  button1Column: {
    flex: 0.4,
    alignItems: "center",
    marginLeft: "7%",
    marginRight: "7%",
    marginBottom: "5%",
    /*marginBottom: 30,
    marginLeft: 47,
    marginRight: 35,*/
  },
});

export default RegisterForm;
