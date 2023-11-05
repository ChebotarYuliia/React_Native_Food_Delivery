import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import SubmitButton from "../components/form-elements/SubmitButton";
import EnterOption from "../components/form-elements/EnterOption";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const loginHandler = () => {
    navigation.navigate("Login" as never);
  };

  const signupHandler = () => {
    navigation.navigate("Signup" as never);
  };

  return (
    <SafeAreaView
      className='flex-1'
      style={{ backgroundColor: themeColors.bg_purple }}
    >
      <View className='flex-1 flex justify-around my-4'>
        <Text className='text-white font-bold text-center text-4xl'>
          Let's get started
        </Text>

        <View className='flex-row justify-center'>
          <Image
            source={require("../../assets/images/welcome.png")}
            style={{ width: 350, height: 350 }}
          />
        </View>

        <View className='space-y-4'>
          <SubmitButton
            className='mx-7'
            onPress={signupHandler}
            text='Sign up'
          />

          <EnterOption
            question='Already have an account?'
            actionText='Log in'
            onPress={loginHandler}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
