import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { CharacterCardInfo } from "../types";

type CharacterCardProps = {
  charInfo: CharacterCardInfo;
};

export default function CharacterCard({ charInfo }: CharacterCardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: charInfo.image }} />
      <Text style={styles.text}>{charInfo.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#414040",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
