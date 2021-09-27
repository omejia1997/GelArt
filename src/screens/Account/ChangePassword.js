import React, { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import { updateUserApi } from "../../api/user";
import useAuth from "../../hooks/userAuth";
import { formStyles } from "../../styles";

export default function ChangePassword() {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        const response = await updateUserApi(auth, formData);
        if (response.statusCode) throw "Error al cambiar la contraseña";
        navigation.goBack();
      } catch (error) {
        Toast.show(error, {
          position: Toast.positions.CENTER,
        });
      }
      setLoading(false);
    },
  });

  return (
    <>
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          placeholder="Nueva Contraseña"
          left={<TextInput.Icon name="lock" />}
          style={styles.inputForm}
          label="Nueva contraseña"
          onChangeText={(text) => formik.setFieldValue("password", text)}
          secureTextEntry
          value={formik.values.password}
          error={formik.errors.password}
        />
        <TextInput
          mode="outlined"
          placeholder="Repetir nueva contraseña"
          left={<TextInput.Icon name="lock" />}
          style={styles.inputForm}
          label="Repetir nueva contraseña"
          onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
          secureTextEntry
          value={formik.values.repeatPassword}
          error={formik.errors.repeatPassword}
        />
        <Button
          mode="contained"
          style={formStyles.btnSucces}
          onPress={formik.handleSubmit}
          loading={loading}
        >
          Cambiar contraseña
        </Button>
      </View>
    </>
  );
}

function initialValues() {
  return {
    password: "",
    repeatPassword: "",
  };
}

function validationSchema() {
  return {
    password: Yup.string().min(4).required(true),
    repeatPassword: Yup.string()
      .min(4)
      .oneOf([Yup.ref("password")], true)
      .required(true),
  };
}

var styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputForm: {
    marginBottom: 20,
  },
});
