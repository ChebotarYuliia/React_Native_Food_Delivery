import {
  Text,
  View,
  TouchableOpacity,
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import CustomTextInput from "../components/form-elements/TextInput";
import InputWithLabel from "../components/form-elements/InputWithLabel";
import SubmitButton from "../components/form-elements/SubmitButton";
import EnterOption from "../components/form-elements/EnterOption";
import EnterForm from "../components/form-elements/EnterForm";
import ErrorMessage from "../components/form-elements/ErrorMessage";
import { AuthContext, TAuthContext } from "../context/AuthProvider";

export default function LoginScreen() {
  const { login } = useContext(AuthContext) as TAuthContext;
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (
    v: NativeSyntheticEvent<TextInputChangeEventData> | string
  ) => {
    setEmail(v as string);
    setError(null);
  };

  const handlePasswordChange = (
    v: NativeSyntheticEvent<TextInputChangeEventData> | string
  ) => {
    setPassword(v as string);
    setError(null);
  };

  const signupHandler = () => {
    navigation.navigate("Signup" as never);
  };

  const handleLogin = async () => {
    if (email && password) {
      const { error } = await login(email, password);
      if (error) setError(error);
    } else {
      setError("Please enter your email and password");
    }
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
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <InputWithLabel label='Email address'>
          <CustomTextInput
            onChange={handleEmailChange}
            value={email}
            placeholder='Enter your email'
          />
        </InputWithLabel>

        <InputWithLabel label='Password'>
          <CustomTextInput
            onChange={handlePasswordChange}
            value={password}
            secureTextEntry
            placeholder='Enter your password'
          />
        </InputWithLabel>
      </View>

      <TouchableOpacity className='flex items-end mt-2 mb-4'>
        <Text className='text-gray-700 '>Forgot password?</Text>
      </TouchableOpacity>

      <SubmitButton text='Login' onPress={handleLogin} />

      <EnterOption
        question="Don't have an account?"
        actionText='Sign up'
        onPress={signupHandler}
      />
    </EnterForm>
  );
}
