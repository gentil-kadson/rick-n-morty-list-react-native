import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CharactersList from "./components/CharactersList";

export default function App() {
  return (
    <View style={styles.container}>
      <CharactersList />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingTop: 50,
  },
});
