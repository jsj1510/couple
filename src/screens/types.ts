// types.ts
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  Home: undefined;
};

export type RootTabParamList = {
  HomeStack: undefined;
  Setting: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;
export type SettingScreenProps = BottomTabScreenProps<
  RootTabParamList,
  "Setting"
>;
