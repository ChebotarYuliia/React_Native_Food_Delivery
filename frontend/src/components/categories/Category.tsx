import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";

export type CategoryProps = {
  id?: number;
  name?: string;
  image?: ImageSourcePropType | string;
  onPress?: React.Dispatch<React.SetStateAction<number | null>>;
  isActive?: boolean;
};

export default function Category({
  id,
  name,
  image,
  onPress,
  isActive = false,
}: CategoryProps) {
  const activeButton = isActive ? "bg-gray-600" : "bg-gray-200";
  const activeText = isActive ? "text-gray-900" : "text-gray-500";

  if (!name && !image && !id) {
    return null;
  }

  return (
    <View className='flex justify-center items-center mr-6'>
      <TouchableOpacity
        className={`flex justify-center items-center p-1 rounded-2xl shadow ${activeButton}`}
        onPress={() => onPress?.(id ?? null)}
      >
        {image && (
          <Image
            style={{ width: 45, height: 45 }}
            source={image as ImageSourcePropType}
          />
        )}
      </TouchableOpacity>
      <Text className={`text-sm pt-1 ${activeText}`}>{name}</Text>
    </View>
  );
}
