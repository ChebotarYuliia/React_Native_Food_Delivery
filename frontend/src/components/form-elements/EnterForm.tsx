import { View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import ArrowLeftIcon from "react-native-heroicons/solid/ArrowLeftIcon";
import { themeColors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

type EnterFormProps = {
  image: React.ReactNode;
  children: React.ReactNode;
};

export default function EnterForm({ image, children }: EnterFormProps) {
  const navigation = useNavigation();

  return (
    <View
      className='flex-1 bg-white'
      style={{ backgroundColor: themeColors.bg_purple }}
    >
      <SafeAreaView className='flex'>
        <View className='flex-row justify-start'>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-2'
          >
            <ArrowLeftIcon color='black' />
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-center py-6'>{image}</View>
      </SafeAreaView>

      <View
        className='bg-white px-8 pt-10 flex-1'
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        {children}
      </View>
    </View>
  );
}
