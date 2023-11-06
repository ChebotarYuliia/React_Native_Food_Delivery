import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import SubmitButton from "../components/form-elements/SubmitButton";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function HomeScreen() {
  const handleSignout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log("CANTT SING OUT: ", err);
    }
  };

  return (
    <SafeAreaView className='bg-white'>
      <StatusBar barStyle={"dark-content"} />
      <View className='flex items-center pt-4 pb-0 px-4 text-center'>
        <Text className='text-lg'>Home Screen</Text>
      </View>

      <View style={{ backgroundColor: themeColors.bg_main() }}>
        <SubmitButton text='Sign out' onPress={handleSignout} />
      </View>
    </SafeAreaView>
  );
}
