import { View, Text, ScrollView, Dimensions } from "react-native";
import BottomNavBar from "../../components/BottomNavBar";

function Home() {
  const heightScreen = Dimensions.get("window").height;

  const upperViewHeight = heightScreen * 0.3;

  return (
    <View className="flex h-full bg-[#fffcfc]">
      <ScrollView className="flex-grow">
        <View>
          <View id="UpperView" style={{ height: upperViewHeight }} className="border justify-center items-center">
            <Text>up</Text>
          </View>
          <View id="BottomView" className="border min-h-[90vh]">
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>
          <Text>down</Text>

        

          </View>
        </View>
      </ScrollView>

      <BottomNavBar />
    </View>
  );
}

export default Home;
