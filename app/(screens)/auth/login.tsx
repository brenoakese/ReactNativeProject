import { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import AuthTabs from "./components/authTabs";
import AuthForm from "./components/authForm";
import { Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { useFonts } from "expo-font";

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(tab === "login" ? "/auth/login" : "/auth/register");
  };



  return (
    <View className="flex h-screen items-center justify-center">
      <Text className="text-7xl font-lobster mb-36 color-black-500">
        Commi 
        <Text className="color-sky-500">Time</Text>
         !
      </Text>
      <AuthTabs onTabChange={handleTabChange} activeTab={activeTab} />
      <AuthForm
        buttonText="Continue"
        placeholderUser="Enter your Username"
        placeholderPassword="Enter your Password"
        gap={16}
        tabType="login"
      />
    </View>
  );
}
