import React from "react";
import { TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../../theme";

type DishControlsProps = {
  add?: boolean;
  remove?: boolean;
  onPress: () => void;
};

export const DishControls = ({ add, remove, onPress }: DishControlsProps) => {
  const styles = {
    strokeWidth: 2,
    height: 20,
    width: 20,
    stroke: "white",
  };
  const Button = ({ children }: { children: React.ReactElement }) => (
    <TouchableOpacity
      className='p-1 rounded-full'
      style={{ backgroundColor: themeColors.bg_main(1) }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );

  if (add) {
    return (
      <Button>
        <Icon.Plus {...styles} />
      </Button>
    );
  } else if (remove) {
    return (
      <Button>
        <Icon.Minus {...styles} />
      </Button>
    );
  }
};
