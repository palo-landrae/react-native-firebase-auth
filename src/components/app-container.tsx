import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { AuthProvider } from "../firebase/AuthProvider";

const AppContainer: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <NativeBaseProvider>{children}</NativeBaseProvider>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default AppContainer;
