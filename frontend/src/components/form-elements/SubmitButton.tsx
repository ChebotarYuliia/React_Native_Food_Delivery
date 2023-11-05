import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import React from "react";

type SubmitButtonProps = {
  text: string;
  onPress?: () => void;
} & TouchableOpacityProps;

export default function SubmitButton({
  text,
  onPress,
  ...props
}: SubmitButtonProps) {
  return (
    <TouchableOpacity
      className='py-3 bg-yellow-400 rounded-xl'
      onPress={onPress}
      {...props}
    >
      <Text className='text-gray-700 text-center font-bold'>{text}</Text>
    </TouchableOpacity>
  );
}
