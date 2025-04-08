import { View, Text } from "react-native";
import  BottomNavBar from "../../components/BottomNavBar";

function Home() {
  return (
    <View className="flex h-full items-center justify-center bg-[#fffcfc]">
      <Text className="text-7xl mb-36 color-black-500">Home</Text>
      <BottomNavBar></BottomNavBar>
    </View>
  );
}

export default Home;
