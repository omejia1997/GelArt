import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Keyboard, Animated } from "react-native";
import { Searchbar } from "react-native-paper";
import {
  AnimatedIcon,
  inputAnimation,
  inputAnimationWidth,
  animatedTransition,
  animatedTransitionReset,
  //arrowAnimation,
} from "./SearchAnimation";
import logo from "../../../assets/images/LOGO_GELART5.png";
import colors from "../../styles/colors";

export default function Search() {
  const openSearch = () => {
    animatedTransition.start();
  };

  const closeSearch = () => {
    animatedTransitionReset.start();
    Keyboard.dismiss(); //Cerrar el keyboard
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.containerSearch}>
        <AnimatedIcon
          name="arrow-left"
          size={20}
          style={[styles.backArrow]}
          onPress={closeSearch}
        />
        <Animated.View style={[inputAnimation, { width: inputAnimationWidth }]}>
          <Searchbar
            style={styles.searchBar}
            placeholder="Busca tu producto"
            onFocus={openSearch}
          />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    paddingVertical: 10,
    //width: "100%",
    //paddingHorizontal: 20,
    zIndex: 1,
  },
  containerSearch: {
    position: "relative",
    width: "75%",
    alignItems: "flex-end",
  },
  //searchBar: { width: "77%" },
  logo: {
    width: "15%",
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    /*borderWidth: 1,
    borderColor: "solid rgba(226,227,232,1)",
    borderRadius: 5,*/
  },
  backArrow: {
    position: "absolute",
    left: 0,
    top: 15,
    color: colors.fontLight,
  },
});
