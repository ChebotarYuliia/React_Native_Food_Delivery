import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-white'>
      <StatusBar barStyle={"dark-content"} />
      <View className='flex items-center pt-4 pb-0 px-4 text-center'>
        <Text className='text-lg'>Home Screen</Text>
      </View>

      <View style={{ backgroundColor: themeColors.bg_main() }}></View>
    </SafeAreaView>
  );
}
