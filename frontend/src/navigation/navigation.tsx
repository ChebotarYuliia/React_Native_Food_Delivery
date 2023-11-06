import React from "react";
import useAuth from "../hooks/useAuth";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";

export default function Navigation() {
  const { user } = useAuth();

  if (user) {
    return <UserStack />;
  } else {
    return <AuthStack />;
  }
}
