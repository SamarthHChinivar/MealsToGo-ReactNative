import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.search}>Search</Text> */}
      <Searchbar style={styles.search} mode="bar" placeholder="Search" />
      <Text style={styles.list}>List</Text>
    </View>
  );
}

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
    backgroundColor: "blue",
    padding: 15,
    flex: 0.90,
  },
});
