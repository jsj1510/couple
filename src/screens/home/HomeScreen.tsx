import React, { useEffect } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { HomeScreenProps } from "@/screens/types";
import Header from "@/components/Header/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header title="메인페이지" />
    </SafeAreaView>
  );
};

export default HomeScreen;
