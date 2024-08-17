import { CharacterCardInfo } from "../types";

import { StyleSheet } from "react-native";
import api from "../services/api";
import { useState, useEffect } from "react";

import CharactersListTitle from "./CharactersListTitle";
import CharacterCard from "./CharacterCard";
import { FlatList } from "react-native";

export default function CharactersList() {
  const [page, setPage] = useState<number>(1);
  const [characters, setCharacters] = useState<CharacterCardInfo[]>([]);
  const [hasMoreData, setHasMoreData] = useState<boolean>(false);

  useEffect(() => {
    if (hasMoreData) {
      api
        .get(`/character/?page=${page}`)
        .then((response) => {
          const charactersObjects: CharacterCardInfo[] = response.data.results;
          setCharacters((prevCharacters) => [
            ...prevCharacters,
            ...charactersObjects,
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [page]);

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.flatListInterior}
      data={characters}
      onEndReached={() => setPage((prev) => prev + 1)}
      onEndReachedThreshold={0.1}
      ListHeaderComponent={<CharactersListTitle />}
      renderItem={({ item }) => <CharacterCard key={item.id} charInfo={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    width: "100%",
  },
  flatListInterior: {
    rowGap: 10,
  },
});
