import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function CharactersListTitle() {
  return <Text style={styles.title}>Rick and Morty</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    alignSelf: "center",
    marginBottom: 16,
  },
});
