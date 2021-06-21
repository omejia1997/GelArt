import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest() {
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <View>
      <Text>User Guest</Text>
      <Button
        title="Ver tu perfil"
        //buttonStyle={}
        //containerStyle={}
        onPress={() => navigation.navigate("login")}
      />
    </View>
  );
}
