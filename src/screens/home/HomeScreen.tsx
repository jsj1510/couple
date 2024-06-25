import React from "react";
import { View, Text, Button } from "react-native";
import { HomeScreenProps } from "@/screens/types";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
