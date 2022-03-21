import { useNavigation } from "@react-navigation/native";
import { Text, Button, Box } from "native-base";
import { logout } from "../firebase/AuthActions";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import StackParamList from "../stack-params-list";
import { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { AuthContext } from "../firebase/AuthContext";

type MainScreenProp = NativeStackNavigationProp<StackParamList, "Main">;

export default function MainScreen() {
  const navigation = useNavigation<MainScreenProp>();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      {user ? (
        <Box alignItems="center">
          <Text>Welcome {user.email}</Text>
          <Button onPress={() => logout()}>Logout</Button>
        </Box>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
}
