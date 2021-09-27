import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../styles/colors";

export default function UserInfo(props) {
  const { user } = props;
  console.log(user);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <View style={styles.direction}>
        <Icon style={styles.iconInfo} name="user" size={20} color="#000"></Icon>
        <Text style={styles.titleName}>
          {`${user.name} ${user.lastName}`}
          {/*user.name && user.lastName
          ? `${user.name} ${user.lastName}`
          : user.email*/}
        </Text>
      </View>
      <View style={styles.direction}>
        <Icon
          style={styles.iconInfo}
          name="envelope"
          size={20}
          color="#000"
        ></Icon>
        <Text style={styles.titleName}>{user.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    //padding: 20,
    //backgroundColor: colors.primary,
    //margin: 5,
    //borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconInfo: {
    marginRight: 10,
  },
  titleName: {
    fontSize: 20,
  },
  direction: {
    flexDirection: "row",
  },
});
