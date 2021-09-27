import React, { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
//import StatusBar from "../../components/StatusBar";
import { getMeApi, updateUserApi } from "../../api/user";
import useAuth from "../../hooks/userAuth";
import colors from "../../styles/colors";
import { formStyles } from "../../styles";

export default function ChangeEmail() {
  const { auth } = useAuth(); //Para obtener el token del usuario
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  //Actualice la vista
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getMeApi(auth.token); //Obtener datos de usuario
        await formik.setFieldValue("email", response.email);
      })();
    }, [])
  );

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        const response = await updateUserApi(auth, formData);
        if (response.statusCode) throw "El email ya existe";
        navigation.goBack();
      } catch (error) {
        Toast.show(error, {
          position: Toast.positions.CENTER,
        });
        formik.setFieldError("email", true);
        setLoading(false);
      }
    },
  });
  //<StatusBar backgroundColor={colors.primary} barStyle="light-content" />

  return (
    <>
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Email"
          left={<TextInput.Icon name="email" />}
          style={styles.email}
          onChangeText={(text) => formik.setFieldValue("email", text)}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Button
          mode="contained"
          style={formStyles.btnSucces}
          onPress={formik.handleSubmit}
          loading={loading}
        >
          Cambiar email
        </Button>
      </View>
    </>
  );
}

function initialValues() {
  return {
    email: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
  };
}

var styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  email: {
    marginBottom: 20,
  },
});
