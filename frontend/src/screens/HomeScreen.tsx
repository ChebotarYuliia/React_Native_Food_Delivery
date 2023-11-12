import { View, Text, StatusBar } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import SubmitButton from "../components/form-elements/SubmitButton";
import { AuthContext, TAuthContext } from "../context/AuthProvider";

export default function HomeScreen() {
  const { logout } = useContext(AuthContext) as TAuthContext;

  const handleSignout = async () => {
    logout();
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
