import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  TouchableO,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import MaterialRadio from "./MaterialRadio";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import TypeUser from "./TypeUser";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { validateEmail } from "../../utils/validations";
import { size, isEmpty } from "lodash";
import { useFormik } from "formik";
import * as Yup from "yup";
//import Toast from "react-native-root-toast";
import { registerApi } from "../../api/user";
import colors from "../../styles/colors";
import { formStyles } from "../../styles";

function RegisterForm(props) {
  const { toastRef } = props;
  const { changeForm } = props;
  //const [userType, setUserType] = useState(1);
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());

  console.log(value);
  const formik = useFormik({
    initialValues: defaultFormValue(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      //console.log(formData);
      setLoading(true);
      try {
        await registerApi(formData);
        changeForm();
        //console.log("OK");
      } catch (error) {
        setLoading(false);
        toastRef.current.show("Error al registrar el usuario");
        //Toast.show("Error al registrar el usuario", {
        //position: Toast.positions.CENTER,
        //});
      }
    },
  });

  /*
  const onSubmit = () => {
    if (
      isEmpty(formData.username) ||
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
    else {
      console.log(formData);
      //setLoading(true);
      try {
        registerApi(formData);
        changeForm();
        console.log("OK");
      } catch (error) {
        //setLoading(false);
        toastRef.current.show("Error al registrar el usuario");
        //Toast.show("Error al registrar el usuario", {
        //position: Toast.positions.CENTER,
        //});
      }
    }
  };
*/
  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <LinearGradient
      colors={["transparent", "rgba(82,145,236,1)"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="rgba(3,55,114,1)" />
      <View style={styles.image1Column}>
        <Image
          source={require("../../../assets/images/LOGO_GELART5.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <TypeUser value={value} setValue={setValue} />
      </View>
      <ScrollView style={styles.form1}>
        <View style={formStyles.containerInput}>
          <MaterialIconsIcon
            name="perm-identity"
            style={formStyles.icon}
          ></MaterialIconsIcon>
          <TextInput
            keyboardType="numeric"
            placeholder="Cedula / Ruc"
            placeholderTextColor={colors.fontLight}
            style={formStyles.input}
            theme={{ colors: { text: colors.fontLight } }}
            onChangeText={(text) => formik.setFieldValue("username", text)}
            value={formik.values.username}
            error={formik.errors.username}
            //onChange={(e) => onChange(e, "username")}
          ></TextInput>
        </View>
        <View style={[formStyles.containerInput, styles.group4]}>
          <EvilIconsIcon name="user" style={formStyles.icon}></EvilIconsIcon>
          <TextInput
            placeholder="Nombre"
            placeholderTextColor={colors.fontLight}
            secureTextEntry={false}
            style={formStyles.input}
            theme={{ colors: { text: colors.fontLight } }}
            onChangeText={(text) => formik.setFieldValue("name", text)}
            value={formik.values.name}
            error={formik.errors.name}
            //onChange={(e) => onChange(e, "name")}
          ></TextInput>
        </View>
        <View style={[formStyles.containerInput, styles.group5]}>
          <EvilIconsIcon name="user" style={formStyles.icon}></EvilIconsIcon>
          <TextInput
            placeholder="Apellido"
            placeholderTextColor={colors.fontLight}
            secureTextEntry={false}
            style={formStyles.input}
            theme={{ colors: { text: colors.fontLight } }}
            onChangeText={(text) => formik.setFieldValue("lastName", text)}
            value={formik.values.lastName}
            error={formik.errors.lastName}
            //onChange={(e) => onChange(e, "lastName")}
          ></TextInput>
        </View>
        <View style={[formStyles.containerInput, styles.group]}>
          <EvilIconsIcon
            name="envelope"
            style={formStyles.icon}
          ></EvilIconsIcon>
          <TextInput
            placeholder="Correo Electronico"
            placeholderTextColor={colors.fontLight}
            secureTextEntry={false}
            style={formStyles.input}
            theme={{ colors: { text: colors.fontLight } }}
            onChangeText={(text) => formik.setFieldValue("email", text)}
            value={formik.values.email}
            error={formik.errors.email}
            //onChange={(e) => onChange(e, "email")}
          ></TextInput>
        </View>
        <View style={[formStyles.containerInput, styles.group3]}>
          <EvilIconsIcon name="lock" style={formStyles.icon}></EvilIconsIcon>
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor={colors.fontLight}
            secureTextEntry={true}
            style={formStyles.input}
            theme={{ colors: { text: colors.fontLight } }}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            value={formik.values.password}
            error={formik.errors.password}
            //onChange={(e) => onChange(e, "password")}
          ></TextInput>
        </View>
        <View style={formStyles.containerInput}>
          <EvilIconsIcon name="lock" style={formStyles.icon}></EvilIconsIcon>
          <TextInput
            placeholder="Repetir Contraseña"
            placeholderTextColor={colors.fontLight}
            secureTextEntry={true}
            style={formStyles.input}
            theme={{ colors: { text: colors.fontLight } }}
            onChangeText={(text) =>
              formik.setFieldValue("repeatPassword", text)
            }
            value={formik.values.repeatPassword}
            error={formik.errors.repeatPassword}
            //onChange={(e) => onChange(e, "repeatPassword")}
          ></TextInput>
        </View>
      </ScrollView>
      <View style={styles.button1Column}>
        <Button
          onPress={formik.handleSubmit}
          loading={loading}
          color="white"
          style={[formStyles.btnSucess, styles.button1]}
        >
          <Text style={formStyles.textButton}>Registrar</Text>
        </Button>
        <Text style={styles.yaTienesCuenta}>¿Ya tienes cuenta?</Text>
        <Text style={styles.iniciarSesion} onPress={changeForm}>
          Iniciar Sesion
        </Text>
      </View>
    </LinearGradient>
  );
}
/*
function GoToLogin(props) {
  const { changeForm } = props;
  return (
    <Text style={styles.iniciarSesion} onPress={changeForm}>
      Iniciar Sesion
    </Text>
  );
}*/

function defaultFormValue() {
  return {
    username: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required(true),
    name: Yup.string().required(true),
    lastName: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
    repeatPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password"), true]),
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
  image1: {
    width: 100,
    height: "70%",
    //borderWidth: 1,
    //borderColor: "solid rgba(226,227,232,1)",
    //borderRadius: 11,
    //backgroundColor: "rgba(230, 230, 230,0.3)",
  },
  group2: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  cedula: {
    //fontFamily: "roboto-700",
    color: colors.fontLight,
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
    color: colors.fontLight,
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
  group4: {
    marginTop: 8,
  },
  group5: {
    marginTop: 9,
  },
  group: {
    marginTop: 8,
    marginBottom: 10,
  },
  icon4: {
    color: colors.fontLight,
    fontSize: 33,
    marginLeft: 15,
    marginTop: 12,
  },
  group3: {
    marginBottom: 9,
  },
  icon3: {
    color: colors.fontLight,
    fontSize: 33,
    marginLeft: 15,
    marginTop: 12,
  },
  image1Column: {
    marginTop: "2%",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    marginBottom: 17,
    marginTop: 10,
  },
  yaTienesCuenta: {
    color: colors.fontLight,
    //fontFamily: "comic-sans-ms-regular",
    marginBottom: 12,
  },
  iniciarSesion: {
    color: colors.fontLight,
    textDecorationLine: "underline",
  },
  button1Column: {
    flex: 0.4,
    alignItems: "center",
    marginLeft: "7%",
    marginRight: "7%",
    marginBottom: "5%",
    width: "80%",
  },
});

export default RegisterForm;
