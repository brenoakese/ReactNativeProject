import { useState } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import AuthTabs from "./components/authTabs";
import AuthForm from "./components/authForm";
import * as SplashScreen from "expo-splash-screen";
import { Lobster_400Regular } from "@expo-google-fonts/lobster";
import { useCallback } from "react";
import { useFonts } from "expo-font";

export default function Register() {
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

  const [activeTab, setActiveTab] = useState("register");
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (username: string) => {
    setUsername(username);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(tab === "login" ? "/auth/login" : "/auth/register");
  };

  const handleRegister = async () => {
    try {

      if(!email || !username || !password) {
        alert("Preencha todos os campos")
        return;
      }

      const userData = {
        email: email,
        username: username,
        password: password,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };

      const response = await fetch("http://localhost:3000/api/auth/register", requestOptions);

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful:", data);
        router.push("/auth/login");
      }
      else {
        console.error("Registration failed:", data.message);
        alert(data.message)
      }


    } catch (error) {
      console.error("Error during registration:", error);
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
        buttonText="Register"
        placeholderUser=" Ex: John123"
        placeholderPassword=" Ex: 123456789"
        onEmailChange={handleEmailChange}
        onUsernameChange={handleUsernameChange}
        onPasswordChange={handlePasswordChange}
        gap={12}
        tabType="register"
        onSubmit={handleRegister}
      />
    </View>
  );
}
