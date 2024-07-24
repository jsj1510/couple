import React from "react";
import * as KakaoLogin from "@react-native-seoul/kakao-login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { RootStackParamList } from "@/screens/types";

import * as S from "./emotion";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type LogoutNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Logout: React.FC = () => {
  const navigation = useNavigation<LogoutNavigationProp>();

  const handleLogout = async () => {
    // const result = await KakaoLogin.logout();
    // await AsyncStorage.clear();
    console.log(1234);
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "Login" }],
    // });
  };

  return (
    <S.Container>
      <S.LogoutButton onPress={handleLogout}>
        <S.ButtonText>Logout with Kakao</S.ButtonText>
      </S.LogoutButton>
    </S.Container>
  );
};

export default Logout;
