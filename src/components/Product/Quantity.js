import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Quantity(props) {
  const [open, setOpen] = useState(false);
  const { quantity, setQuantity } = props;
  const [items, setItems] = useState([
    { label: "1", value: 1 },
    { label: "2", value: 2 },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={quantity}
      items={items}
      setOpen={setOpen}
      setValue={setQuantity}
      setItems={setItems}
      containerStyle={styles.containerStyle}
      listMode="SCROLLVIEW"
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    //height: 20,
    width: "80%",
  },
  itemStyle: {
    justifyContent: "flex-start",
  },
  dropDownStyle: {
    backgroundColor: "#fafafa",
  },
  dropDownPicker: {
    backgroundColor: "#fafafa",
  },
  labelStyle: {
    color: "#000",
  },
});
