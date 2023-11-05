import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import CustomTextInput from "../components/form-elements/TextInput";
import InputWithLabel from "../components/form-elements/InputWithLabel";
import SubmitButton from "../components/form-elements/SubmitButton";
import EnterOption from "../components/form-elements/EnterOption";
import EnterForm from "../components/form-elements/EnterForm";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signupHandler = () => {
    navigation.navigate("Signup" as never);
  };

  return (
    <EnterForm
      image={
        <Image
          source={require("../../assets/images/login.png")}
          style={{ width: 200, height: 200 }}
        />
      }
    >
      <View className='form space-y-2'>
        <InputWithLabel label='Email address'>
          <CustomTextInput
            onChange={(v) => setEmail(v as string)}
            value={email}
            placeholder='Enter your email'
          />
        </InputWithLabel>

        <InputWithLabel label='Password'>
          <CustomTextInput
            onChange={(v) => setPassword(v as string)}
            value={password}
            secureTextEntry
            placeholder='Enter your password'
          />
        </InputWithLabel>
      </View>

      <TouchableOpacity className='flex items-end mt-2 mb-4'>
        <Text className='text-gray-700 '>Forgot password?</Text>
      </TouchableOpacity>

      <SubmitButton text='Login' />

      <EnterOption
        question="Don't have an account?"
        actionText='Sign up'
        onPress={signupHandler}
      />
    </EnterForm>
  );
}
