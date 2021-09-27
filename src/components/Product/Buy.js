import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { addProductCartApi } from "../../api/cart";

export default function Actions(props) {
  const { product, quantity, toastRef } = props;

  const addProductCart = async () => {
    const response = await addProductCartApi(product._id, quantity);
    if (response) {
      //console.log("Exito");
      toastRef.current.show("Producto añadido al carrito");
    } else {
      toastRef.current.show("ERROR al añadir el producto al carrito");
    }
  };

  return (
    <Button
      mode="contained"
      //contentStyle={styles.btnBuyContent}
      //labelStyle={styles.btnLabel}
      style={styles.btn}
      onPress={addProductCart}
    >
      Añadir a la cesta
    </Button>
  );
}

const styles = StyleSheet.create({
  btnLabel: {
    fontSize: 18,
  },
  btn: {
    //marginTop: 20,
    width: "80%",
  },
  btnBuyContent: {
    backgroundColor: "#008fe9",
    paddingVertical: 5,
  },
});
