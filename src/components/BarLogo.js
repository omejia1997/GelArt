import React from "react";
import { StyleSheet, View, Image } from "react-native";
import logo from "../../assets/images/LOGO_GELART5.png";
import colors from "../styles/colors";

export default function BarLogo() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  logo: { width: 55, height: 50 },
});
