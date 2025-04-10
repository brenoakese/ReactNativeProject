import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";



type NavBarItem = {
  name: string;
  icon: "home-outline" | "calendar-outline" | "person-outline" | "settings-outline";
}



export default function BottomNavBar() {

  const [activeTab, setActiveTab] = useState("home");

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  }

  const NavBarArray: NavBarItem[] = [
    { name: "Home", icon: "home-outline" },
    { name: "Calendar", icon: "calendar-outline" },
    { name: "Profile", icon: "person-outline" },
    { name: "Settings", icon: "settings-outline" },
  ];

  return (
    <View className="absolute bottom-0 border-t h-16 w-full border-gray-300 rounded-t-md flex-row shadow-md bg-white">
      {NavBarArray.map((item, index) => (
        <TouchableOpacity
          key={index}
          className="flex-1 justify-center items-center"
          onPress={() => console.log("Botão foi pressionado")}
        >
          <Ionicons name={item.icon} size={24} color="black" />
          <Text className="text-xs">{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
