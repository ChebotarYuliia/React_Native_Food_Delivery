import React, { useContext } from "react";
import useAuth from "../hooks/useAuth";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import { AuthContext } from "../context/AuthProvider";
import { View, ActivityIndicator } from "react-native";

export default function Navigation() {
  const { userToken, isLoading } = useContext(AuthContext);

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
