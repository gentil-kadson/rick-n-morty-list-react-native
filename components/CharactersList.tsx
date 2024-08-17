import { CharacterCardInfo } from "../types";

import { StyleSheet } from "react-native";
import api from "../services/api";
import { useState, useEffect } from "react";

import CharactersListTitle from "./CharactersListTitle";
import CharacterCard from "./CharacterCard";
import { FlatList } from "react-native";
import ListLoadingFooter from "./ListLoadingFooter";

export default function CharactersList() {
  const [page, setPage] = useState<number>(1);
  const [characters, setCharacters] = useState<CharacterCardInfo[]>([]);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/character/?page=${page}`);
      if (response.status === 200) {
        const charactersObjects: CharacterCardInfo[] = response.data.results;
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...charactersObjects,
        ]);
      } else {
        setHasMoreData(false);
      }
    }

    getData();
  }, [page]);

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.flatListInterior}
      data={characters}
      onEndReached={() => setPage((prev) => prev + 1)}
      onEndReachedThreshold={0.1}
      ListHeaderComponent={<CharactersListTitle />}
      renderItem={({ item }) => <CharacterCard charInfo={item} />}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={hasMoreData ? <ListLoadingFooter /> : <></>}
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
