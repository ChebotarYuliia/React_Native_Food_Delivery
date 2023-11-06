import { Text } from "react-native";
import React from "react";

type ErrorMessageProps = {
  children: string;
};

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <Text className='text-red-400 text-center mb-2'>{children}</Text>;
}
