import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function TypeUser(props) {
  const [open, setOpen] = useState(false);
  const { value, setValue } = props;
  const [items, setItems] = useState([
    { label: "Empleado", value: "empleado" },
    { label: "Cliente", value: "cliente" },
  ]);
  return (
    <DropDownPicker
      placeholder="Tipo de Usuario"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={styles.containerStyle}
      //itemStyle={styles.itemStyle}
      //dropDownStyle={styles.dropDownPicker}
      style={styles.dropDownPicker}
      //labelStyle={styles.labelStyle}
      textStyle={styles.labelStyle}
      dropDownContainerStyle={{
        backgroundColor: "grey",
      }}
      /*
      selectedItemContainerStyle={{
        acbkgroundColor: "grey",
      }}*/
    />
    /*<DropDownPicker
      open={false}
      items={[
        {
          label: "1",
          value: 1,
        },
        {
          label: "2",
          value: 2,
        },
      ]}
      defaultValue={userType}
      containerStyle={styles.containerStyle}
      itemStyle={styles.itemStyle}
      dropDownStyle={styles.dropDownPicker}
      style={styles.dropDownPicker}
      labelStyle={styles.labelStyle}
      onChangeItem={(item) => setUserType(item.value)}*/
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    width: "79%",
    marginBottom: 30,
  },
  dropDownPicker: {
    backgroundColor: "#364057",
  },
  /*itemStyle: {
    justifyContent: "flex-start",
  },
  dropDownStyle: {
    backgroundColor: "blue",
  },*/
  labelStyle: {
    color: "white",
  },
});
