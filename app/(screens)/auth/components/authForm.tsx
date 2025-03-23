import { View, Text, TextInput, TouchableOpacity } from "react-native";

interface AuthFormProps {
  buttonText: string;
}

export default function AuthForm({ buttonText }: AuthFormProps) {
  return (
    <View className="flex justify-center w-96 h-60 border rounded-[10px] px-5 border-gray-400 gap-5">
      <View>
        <Text className="text-xs pb-1 font-inter-regular">Your Username</Text>
        <TextInput
          className="border rounded-[5px] h-7"
          placeholder=" Enter your username"
          placeholderTextColor={"#B3B3B3"}
        />
      </View>
      <View>
        <Text className="text-xs pb-1 font-inter-regular">Your Password</Text>
        <TextInput
          className="border rounded-[5px] h-7"
          placeholder=" Enter your password"
          placeholderTextColor={"#B3B3B3"}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity className="flex items-center justify-center h-8 bg-[#648DDB] rounded">
        <Text className="text-white font-inter-regular">{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}