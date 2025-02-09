import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.search}>Search</Text> */}
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
  },

  search: {
    // backgroundColor: "green",
    marginBottom: "2.5%",
    marginTop: "5%",
    flex: 0.08,
  },

  list: {
    backgroundColor: "blue",
    padding: "3%",
    flex: 0.9,
  },
});
