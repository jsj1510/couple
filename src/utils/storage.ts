import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkKakaoLogin = async (): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem("kakaoLogin");
    return value !== null;
  } catch (error) {
    return false;
  }
};
