import { Text, Image, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import EnterForm from "../components/form-elements/EnterForm";
import InputWithLabel from "../components/form-elements/InputWithLabel";
import CustomTextInput from "../components/form-elements/TextInput";
import SubmitButton from "../components/form-elements/SubmitButton";
import EnterOption from "../components/form-elements/EnterOption";
import { useNavigation } from "@react-navigation/native";

export default function SignupSrcreen() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginHandler = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <EnterForm
      image={
        <Image
          source={require("../../assets/images/signup.png")}
          style={{ width: 150, height: 150 }}
        />
      }
    >
      <View className='form space-y-2'>
        <InputWithLabel label='User name'>
          <CustomTextInput
            onChange={(v) => setUserName(v as string)}
            value={userName}
            placeholder='Enter your email'
          />
        </InputWithLabel>

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
        question='Have an account?'
        actionText='Login'
        onPress={loginHandler}
      />
    </EnterForm>
  );
}
