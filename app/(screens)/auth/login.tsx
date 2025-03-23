import { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import AuthTabs from "./components/authTabs";
import AuthForm from "./components/authForm";

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(tab === "login" ? "/auth/login" : "/auth/register");
  };

  return (
    <View className="flex h-screen items-center justify-center">
      <AuthTabs onTabChange={handleTabChange} activeTab={activeTab} />
      <AuthForm buttonText="Continue" />
    </View>
  );
}