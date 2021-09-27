import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Product/Home";
//import Search from "../screens/Product/Search";
import Product from "../screens/Product/Product";
import colors from "../styles/colors";

const Stack = createStackNavigator();

export default function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.fontLight,
        headerStyle: { backgroundColor: colors.primary },
        cardStyle: {
          backgroundColor: colors.fontLight,
        },
      }}
    >
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="product"
        component={Product}
        options={{ headerShown: false }}
      />
      {/*<Stack.Screen
        name="search"
        component={Search}
        options={{ headerShown: false }}
      />
      */}
    </Stack.Navigator>
  );
}
