import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { UserContext } from "./context/UserContext";

import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./navigations/AuthStack/AuthStack";
import { AppDrawerNavigation } from "./navigation/AppDrawerNavigation";

export function Root() {
  const [hasLogged, setHasLogged] = useState(false);

  return (
    <UserContext.Provider value={{ setHasLogged }}>
      <NavigationContainer>
        {hasLogged ? <AppDrawerNavigation />: <AuthStack />}
      </NavigationContainer>
    </UserContext.Provider>
  );
}
