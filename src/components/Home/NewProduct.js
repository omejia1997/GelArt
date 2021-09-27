import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ListProduct from "./ListProduct";
import { getLastProuctsApi } from "../../api/product";
import colors from "../../styles/colors";

export default function NewProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getLastProuctsApi(30);
      //console.log(response);
      setProducts(response);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {products && <ListProduct products={products} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 3 },
  /*title: {
    fontWeight: "bold",
    fontSize: 22,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },*/
});
