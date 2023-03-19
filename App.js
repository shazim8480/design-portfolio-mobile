import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native";
import { colors } from "./src/theme/colors";
// screens
import Portfolio from "./src/screens/Portfolio";
// fonts
import { useFonts } from "expo-font";
import {
  PlusJakartaSans_500Medium,
  PlusJakartaSans_700Bold,
} from "@expo-google-fonts/plus-jakarta-sans";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    body: PlusJakartaSans_500Medium,
    heading: PlusJakartaSans_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />; // You can return a loading indicator here
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Portfolio />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.white,
  },
});
