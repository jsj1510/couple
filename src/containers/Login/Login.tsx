import React from "react";

import { useNavigation, NavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "@/screens/types";

import * as S from "./emotion";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const Login: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleKakaoLogin = async () => {
    console.log(1234);

    try {
      navigation.navigate("Home");
    } catch (err: any) {}
  };

  return (
    <S.Container>
      <S.LoginButton onPress={handleKakaoLogin}>
        <S.ButtonText>Login with Kakao</S.ButtonText>
      </S.LoginButton>
    </S.Container>
  );
};

export default Login;
