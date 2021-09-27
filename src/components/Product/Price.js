import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Price(props) {
  const { price, discount } = props;

  const calcPrice = (price, discount) => {
    if (!discount) return price;

    const discountAmount = (price * discount) / 100;
    return (price - discountAmount).toFixed(2);
  };

  return (
    <View style={styles.prices}>
      {discount && (
        <View style={styles.conatinerData}>
          <Text style={styles.dataText}>Precio recomendado:</Text>
          <Text style={[styles.dataValue, styles.oldPrice]}>{price} €</Text>
        </View>
      )}
      <View style={styles.conatinerData}>
        <Text style={styles.dataText}>Precio x Kg:</Text>
        <Text style={[styles.dataValue, styles.currentPrice]}>
          {calcPrice(price, discount)} $
        </Text>
      </View>

      {discount && (
        <View style={styles.conatinerData}>
          <Text style={styles.dataText}>Ahorras:</Text>
          <Text style={[styles.dataValue, styles.saving]}>
            {((price * discount) / 100).toFixed(2)} € ({discount}%)
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  conatinerData: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  dataText: {
    width: "45%",
    //fontSize: 18,
    //color: "#747474",
    color: "black",
    textAlign: "right",
    fontWeight: "bold",
    //fontStyle: 'italic'  //cursiva
  },
  dataValue: {
    width: "55%",
    //fontSize: 18,

    paddingLeft: 5,
  },
  oldPrice: {
    textDecorationLine: "line-through",
  },
  currentPrice: {
    //fontSize: 23,
    color: "#4A5589",
  },
  saving: {
    color: "#bc0e0d",
  },
});
