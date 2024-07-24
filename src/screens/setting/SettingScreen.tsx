import React from "react";
import { View, Text, Button } from "react-native";
import { SettingScreenProps } from "@/screens/types";

import Logout from "@/containers/Setting/Logout";

const SettingPage = () => {
  return (
    <View>
      <Logout />
    </View>
  );
};

export default SettingPage;
