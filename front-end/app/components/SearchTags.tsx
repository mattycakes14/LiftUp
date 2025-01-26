import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
const SearchTags = () => {
  const sampleTags = ["Distribution Centers", "Volunteer", "temporary housing"];
  return (
    <FlatList
      data={sampleTags}
      horizontal={true}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.searchTagContainer}>
          <Text style={styles.searchText}>{item}</Text>
        </TouchableOpacity>
      )}
    ></FlatList>
  );
};
const styles = StyleSheet.create({
  searchTagContainer: {
    backgroundColor: "green",
    margin: 8,
    padding: 8,
    borderRadius: 8,
  },
  searchText: {
    color: "white",
  },
});
export default SearchTags;
