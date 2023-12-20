import { Alert } from "react-native";

export const OrderAlert = (handlePress: () => void) =>
  Alert.alert(
    "Order was successully placed",
    "Thank you so much choosing us <3",
    [
      {
        text: "You're welcome",
        onPress: handlePress,
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );
