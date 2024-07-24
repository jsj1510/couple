import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@/screens/Login/LoginScreen";
import { checkKakaoLogin } from "@/utils/storage";
import { RootStackParamList } from "@/screens/types";

import HomeTab from "./HomeTab";
import HomeStack from "./HomeStack";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await checkKakaoLogin();
      setIsLoggedIn(loggedIn);
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (isLoading) return null;
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <HomeStack initial="Home" />
      ) : (
        <HomeStack initial="Login" />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
