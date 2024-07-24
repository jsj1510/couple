import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import HomeStack from "./HomeStack";
import SettingScreen from "@/screens/Setting/SettingScreen";
import { RootTabParamList } from "@/screens/types";
import HomeScreen from "@/screens/Home/HomeScreen";

const Tab = createBottomTabNavigator<RootTabParamList>();

const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          tabBarLabel: "홈",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: "세팅",
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
