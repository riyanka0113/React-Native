import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../shared/Card";
import { globalStyles } from "../styles/global";

function ReviewDetail({ route }) {
  const { title, rating, body } = route.params;
  console.log(rating,"rating info");
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.text}>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          {Array(rating).fill(rating).map( (_, index) => (<FontAwesome name="star" size={24} color="#FFD700" key={index} />))}
          {/* <Image source={Images.ratings[rating]} /> */}
        </View>
      </Card>
    </View>
  );
}

const styles= StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  }
})

export default ReviewDetail;
