import { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import AuthTabs from "./components/authTabs";
import AuthForm from "./components/authForm";

export default function Register() {
  const [activeTab, setActiveTab] = useState("register");
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (username: string) => {
    setUsername(username);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(tab === "login" ? "/auth/login" : "/auth/register");
  };


  const handleRegister = () => {
    console.log("Registering user with username: ", username, " and password: ", password);
  }

  return (
    <View className="flex h-screen items-center justify-center">
      <AuthTabs onTabChange={handleTabChange} activeTab={activeTab} />
      <AuthForm
        buttonText="Register"
        placeholderUser=" Ex: John123"
        placeholderPassword=" Ex: 123456789"
        onUsarnameChange={handleUsernameChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleRegister}
      />
    </View>
  );
}
