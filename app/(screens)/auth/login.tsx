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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlepasswordchange = (text: string) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        console.log("email", email, "password", password);
        alert("Preencha todos os campos");
        return;
      }

      const userData = {
        email: email,
        password: password,
      };

      const requestOpstions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };

      const response = await fetch(
        "http://localhost:3000/api/auth/login",
        requestOpstions
      );
      const data = await response.json();

      if (response.ok) {
        alert("Login realizado com sucesso");
        router.push("/home");
      } else {
        alert("Erro ao realizar login");
      }
      console.log("Login response:", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <View className="flex h-screen items-center justify-center">
      <Text className="text-7xl font-lobster mb-36 color-black-500">
        Commi
        <Text className="color-sky-500">Time</Text>!
      </Text>
      <AuthTabs onTabChange={handleTabChange} activeTab={activeTab} />
      <AuthForm
        buttonText="Continue"
        placeholderPassword="Enter your Password"
        onEmailChange={handleEmailChange}
        onPasswordChange={handlepasswordchange}
        onSubmit={handleLogin}
        gap={16}
        tabType="login"
      />
    </View>
  );
}
