import {
  Text,
  Image,
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import React, { useState } from "react";
import EnterForm from "../components/form-elements/EnterForm";
import InputWithLabel from "../components/form-elements/InputWithLabel";
import CustomTextInput from "../components/form-elements/TextInput";
import SubmitButton from "../components/form-elements/SubmitButton";
import EnterOption from "../components/form-elements/EnterOption";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import ErrorMessage from "../components/form-elements/ErrorMessage";

export default function SignupSrcreen() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string | null>(null);

  const handleUserNameChange = (
    v: NativeSyntheticEvent<TextInputChangeEventData> | string
  ) => {
    setUserName(v as string);
    setError(null);
  };

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

  const loginHandler = () => {
    navigation.navigate("Login" as never);
  };

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        setError("Cant sing up");
        console.log("CAN'T SIGN UP: ", err);
      }
    }
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
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <InputWithLabel label='User name'>
          <CustomTextInput
            onChange={handleUserNameChange}
            value={userName}
            placeholder='Enter your email'
          />
        </InputWithLabel>

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

      <SubmitButton text='Sign up' onPress={handleSubmit} />

      <EnterOption
        question='Have an account?'
        actionText='Login'
        onPress={loginHandler}
      />
    </EnterForm>
  );
}
