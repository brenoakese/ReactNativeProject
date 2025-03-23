import { View, Text, TouchableOpacity } from "react-native";

interface AuthTabsProps {
  onTabChange: (tab: string) => void;
  activeTab: string;
}

export default function AuthTabs({ onTabChange, activeTab }: AuthTabsProps) {
  return (
    <View className="absolute top-0 mt-3 flex flex-row gap-9">
      <TouchableOpacity onPress={() => onTabChange("login")} className="pb-1">
        <Text className={`text-lg font-inter-regular ${activeTab === "login" ? "text-blue-500" : "text-gray-500"}`}>
          Login
        </Text>
        {activeTab === "login" && <View className="h-0.5 bg-blue-500 mt-1" />}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onTabChange("register")}>
        <Text className={`text-lg font-inter-regular ${activeTab === "register" ? "text-blue-500" : "text-gray-500"}`}>
          Sign-in
        </Text>
        {activeTab === "register" && <View className="h-0.5 bg-blue-500 mt-1" />}
      </TouchableOpacity>
    </View>
  );
}