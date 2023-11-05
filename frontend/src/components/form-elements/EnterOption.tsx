import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type EnterOptionProps = {
  question: string;
  actionText: string;
  onPress: () => void;
};

export default function EnterOption({
  question,
  actionText,
  onPress,
}: EnterOptionProps) {
  return (
    <View className='flex-row justify-center mt-4 space-x-2'>
      <Text className='font-semibold'>{question}</Text>

      <TouchableOpacity onPress={onPress}>
        <Text className='font-semibold text-yellow-400'>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
}
