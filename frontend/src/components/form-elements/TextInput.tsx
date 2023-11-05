import { TextInput, TextInputProps } from "react-native";
import React from "react";

type CustomTextInputProps = {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
} & TextInputProps;

export default function CustomTextInput({
  value,
  onChange,
  placeholder,
  ...props
}: CustomTextInputProps) {
  return (
    <TextInput
      className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      {...props}
    />
  );
}
