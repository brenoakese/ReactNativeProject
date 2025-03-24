import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

interface AuthFormProps {
  buttonText: string;
  placeholderUser: string;
  placeholderPassword: string;
  onUsarnameChange?: (username: string) => void;
  onPasswordChange?: (password: string) => void;
  onSubmit?: () => void;
}

export default function AuthForm({
  buttonText,
  placeholderUser,
  placeholderPassword,
  onUsarnameChange,
  onPasswordChange,
  onSubmit,
}: AuthFormProps) {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex justify-center w-96 h-60 border rounded-[10px] px-5 border-gray-400 gap-5">
      <View>
        <Text className="text-xs pb-1 font-inter-regular">Your Username</Text>
        <TextInput
          className="border rounded-[5px] h-7"
          placeholder={placeholderUser}
          placeholderTextColor={"#B3B3B3"}
          onChangeText={onUsarnameChange}
        />
      </View>
      <View>
        <Text className="text-xs pb-1 font-inter-regular">Your Password</Text>
        <TextInput
          className="border rounded-[5px] h-7"
          placeholder={placeholderPassword}
          placeholderTextColor={"#B3B3B3"}
          secureTextEntry={true}
          onChangeText={onPasswordChange}
        />
      </View>
      <TouchableOpacity
        onPress={onSubmit}
        className="flex items-center justify-center h-8 bg-[#648DDB] rounded"
      >
        <Text className="text-white font-inter-regular">{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
