import React, { useEffect } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { LoginScreenProps, RootStackParamList } from "@/screens/types";
import Header from "@/components/Header/Header";
import Login from "@/containers/Login/Login";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Date"
>;

const DateScreen = () => {
  return (
    <SafeAreaView>
      <Header title="날짜페이지" />
    </SafeAreaView>
  );
};

export default DateScreen;
