import Bmi from "@/components/week5/Bmi";
import Heartbeat from "@/components/week5/Heartbeat";
import React from "react";
import { StyleSheet, View } from "react-native";
const health = () => {
  return (
    <View style={styles.container}>
      <Bmi />
      <Heartbeat />
    </View>
  );
};

export default health;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    padding: 20,
  },
});
