import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Date: undefined;
};

export type RootTabParamList = {
  HomeStack: undefined;
  Setting: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Login"
>;

export type DateScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Date"
>;

export type HomeTabScreenProps = BottomTabScreenProps<
  RootTabParamList,
  "HomeStack"
>;

export type SettingScreenProps = BottomTabScreenProps<
  RootTabParamList,
  "Setting"
>;
