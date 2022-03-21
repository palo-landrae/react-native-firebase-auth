import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { AuthProvider } from "../firebase/AuthProvider";

type Props = {
  children: React.ReactNode;
};

export default function AppContainer(props: Props) {
  return (
    <AuthProvider>
      <NavigationContainer>
        <NativeBaseProvider>{props.children}</NativeBaseProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
