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
    <View>
      <View style={styles.searchByFilterContainer}>
        <Text>Search by filter</Text>
      </View>
      <FlatList
        data={sampleTags}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.searchTagContainer}>
            <Text style={styles.searchText}>{item}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
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
  searchByFilterContainer: {
    marginLeft: 10,
    marginTop: 10,
  },
});
export default SearchTags;
