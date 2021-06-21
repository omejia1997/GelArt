import React from "react";
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
});
