import { Text } from "react-native";
import React from "react";

type InputWithLabelProps = {
  label: string;
  children: React.ReactElement; // input
};

export default function InputWithLabel({
  label,
  children,
}: InputWithLabelProps) {
  return (
    <>
      <Text className='text-grey-700 ml-4 py-2'>{label}</Text>
      {children}
    </>
  );
}
