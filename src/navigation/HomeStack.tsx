import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/screens/types";

import LoginScreen from "@/screens/Login/LoginScreen";
import DateScreen from "@/screens/Date/Date";
import HomeTab from "./HomeTab";

type HomeStackProps = {
  initial?: keyof RootStackParamList;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack: React.FC<HomeStackProps> = ({ initial = "Home" }) => {
  return (
    <Stack.Navigator
      initialRouteName={initial}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeTab} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Date" component={DateScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
