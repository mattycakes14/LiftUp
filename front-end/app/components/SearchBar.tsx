import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        placeholder="Search for an event"
        placeholderTextColor="gray"
        style={styles.searchBar}
      ></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  searchBarContainer: {
    alignItems: "center",
  },
  searchBar: {
    borderWidth: 0.5,
    width: "90%",
    borderRadius: 15,
    padding: 10,
  },
});
export default SearchBar;
