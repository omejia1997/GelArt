import React from "react";
import { ScrollView } from "react-native";
import StatusBar from "../../components/StatusBarCustom";
import Search from "../../components/Search";
import NewProducts from "../../components/Home/NewProduct";
import colors from "../../styles/colors";

export default function Home() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Search />
      <ScrollView>
        <NewProducts />
      </ScrollView>
    </>
  );
}
