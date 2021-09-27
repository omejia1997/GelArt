import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import useAuth from "../hooks/userAuth";
import ScreenLoading from "../components/ScreenLoading";
import FavoriteList from "../components/Favorites/FavoriteList";
import { getFavoriteApi } from "../api/favorite";

export default function Favorites() {
  const [products, setProducts] = useState(null);
  const [reloadFavorite, setReloadFavorite] = useState(false);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      setProducts(null);

      (async () => {
        const response = await getFavoriteApi(auth);
        setProducts(response);
      })();

      setReloadFavorite(false);
    }, [reloadFavorite])
  );

  return (
    <>
      {!products ? (
        <ScreenLoading text="Cargando lista" />
      ) : size(products) === 0 ? (
        <View style={styles.container}>
          <Text style={styles.title}>Lista de favoritos</Text>
          <Text>No tienes productos en tu lista</Text>
        </View>
      ) : (
        <FavoriteList
          products={products}
          auth={auth}
          setReloadFavorite={setReloadFavorite}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 5,
  },
});