import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Section3() {
  return (
    <View style={styles.container}>
      <View style={styles.review}>
        <Text>9.5</Text>
      </View>
      <View style={{ paddingLeft: 10 }}>
        <Text style={{ fontSize: 20 }}>Excellent</Text>
        <Text style={{ color: "gray" }}>See 801 reviews</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    marginLeft:20,
  },
  review: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#ff7373ff",
    justifyContent: "center",
    alignItems: "center",
  },
});
