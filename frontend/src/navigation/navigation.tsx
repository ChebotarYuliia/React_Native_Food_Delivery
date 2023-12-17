import React, { useContext } from "react";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import { AuthContext, TAuthContext } from "../context/AuthProvider";
import { View, ActivityIndicator } from "react-native";

export default function Navigation() {
  const { userToken, isLoading } = useContext(AuthContext) as TAuthContext;

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size='large' />
    </View>;
  }

  if (userToken !== null) {
    return <UserStack />;
  } else {
    return <AuthStack />;
  }
}
