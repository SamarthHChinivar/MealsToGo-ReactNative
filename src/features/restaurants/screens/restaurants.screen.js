import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.search}>Search</Text> */}
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
  },

  search: {
    //backgroundColor: "green",
    marginBottom: 15,
    marginTop: 5,
    flex: 0.08,
  },

  list: {
    //backgroundColor: "blue",
    padding: 15,
    flex: 0.9,
  },
});
