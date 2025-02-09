import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

/* For Destructuring to work, restaurant object should be assigned 
with either an empty object or an empty array*/
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "VTR",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "5th corss, Mallewaram, Bangalore",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant; // Destructuring the restaurant object
  /* restaurent.name can be directly used as name itself, 
  which is the whole purpose of Destructuring */

  return (
    <Card elevation={2} style={styles.card}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content style={styles.content}>
        <Text style={styles.address}>{address}</Text>
      </Card.Content>
    </Card>
  );
};

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    paddingHorizontal: "5%",
    paddingVertical: "2.5%",
  },
  content: {
    paddingTop: "5%",
    justifyContent: "space-between",
  },
  address: {
    fontSize: 15,
  },
});
