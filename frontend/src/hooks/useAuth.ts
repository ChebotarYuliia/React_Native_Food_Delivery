import { User, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../config/firebase";

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log("User: ", user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsub;
  }, []);
  return { user };
}
