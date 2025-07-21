import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card() {
  return (
    <View style={{ padding: 10 }}>
      <View style={styles.line}>
        <Text style={styles.textH}>Hotel Description</Text>
        <Text style={styles.textBody}>
          218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor
          incididunt ut labore et dolore
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  line: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  textH: {
    fontSize: 20,
    padding: 4,
  },
  textBody: {
    color: "#444444",
    padding: 4,
  },
});
