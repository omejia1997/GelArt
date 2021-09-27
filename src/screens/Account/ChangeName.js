import React, { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome";
import Toast from "react-native-root-toast";
//import StatusBar from "../../components/StatusBar";
import { getMeApi, updateUserApi } from "../../api/user";
import useAuth from "../../hooks/userAuth";
import colors from "../../styles/colors";
import { formStyles } from "../../styles";

export default function ChangeName() {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getMeApi(auth.token); //Obtener datos de usuario logeado
        if (response.name && response.lastName) {
          await formik.setFieldValue("name", response.name);
          await formik.setFieldValue("lastName", response.lastName);
        }
      })();
    }, [])
  );

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        await updateUserApi(auth, formData);
        navigation.goBack();
      } catch (error) {
        Toast.show("Error al actualizar los datos." + error, {
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
          placeholder="Nombre"
          left={
            <TextInput.Icon name={() => <Icon name={"user"} size={20} />} />
          }
          style={styles.inputForm}
          label="Nombre"
          onChangeText={(text) => formik.setFieldValue("name", text)}
          value={formik.values.name}
          error={formik.errors.name}
        />
        <TextInput
          mode="outlined"
          placeholder="Apellido"
          left={
            <TextInput.Icon name={() => <Icon name={"user"} size={20} />} />
          }
          style={styles.inputForm}
          label="Apellidos"
          onChangeText={(text) => formik.setFieldValue("lastName", text)}
          value={formik.values.lastName}
          error={formik.errors.lastName}
        />
        <Button
          mode="contained"
          onPress={formik.handleSubmit}
          loading={loading}
        >
          Cambiar nombre y apellidos
        </Button>
      </View>
    </>
  );
}

function initialValues() {
  return {
    name: "",
    lastName: "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    lastName: Yup.string().required(true),
  };
}

var styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputForm: {
    marginBottom: 20,
  },
  btnSucess: {
    backgroundColor: colors.primary,
  },
});
