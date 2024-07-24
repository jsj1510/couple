import React, { useEffect } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { LoginScreenProps, RootStackParamList } from "@/screens/types";
import Header from "@/components/Header/Header";
import Login from "@/containers/Login/Login";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Header title="로그인페이지" />
      <Login />
    </SafeAreaView>
  );
};

export default LoginScreen;
