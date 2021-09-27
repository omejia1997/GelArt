import React, { useState, useCallback } from "react";
import { ScrollView, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import StatusBar from "../../components/StatusBarCustom";
import BarLogo from "../../components/BarLogo";
import ScreenLoading from "../../components/ScreenLoading";
import Menu from "../../components/Account/Menu";
import UserInfo from "../../components/Account/UserInfo";
import userAuth from "../../hooks/userAuth";
import { getMeApi } from "../../api/user";
import colors from "../../styles/colors";

export default function Account() {
  const [user, setUser] = useState(null);
  const { auth } = userAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getMeApi(auth.token);
        setUser(response);
        //console.log(response);
      })();
    }, [])
  );

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      {!user ? (
        <ScreenLoading size="large" />
      ) : (
        <>
          <BarLogo />
          <UserInfo user={user} />
          <ScrollView>
            <Menu />
          </ScrollView>
        </>
      )}
    </>
  );
}
