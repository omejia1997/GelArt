import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import ProductsStack from "./ProductsStack";
import AccountStack from "./AccountStack";
import EquipmentStack from "./EquipmentStack";
import SearchStack from "./SearchStack";

const Tab = createBottomTabNavigator(); //Componente
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="products"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
        <Tab.Screen
          name="products"
          component={ProductsStack}
          options={{ title: "Productos" }}
        />
        <Tab.Screen
          name="equipment"
          component={EquipmentStack}
          options={{ title: "Equipos" }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Buscar" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "products":
      iconName = "compass-outline";
      break;
    case "account":
      iconName = "account-circle";
      break;
    case "equipment":
      iconName = "compass-outline";
      break;
    case "search":
      iconName = "magnify";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
