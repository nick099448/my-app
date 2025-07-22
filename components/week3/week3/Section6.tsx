import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Section6 = () => {
  return (
    <View style={{ padding: 10 }}>
      <View style={{ padding: 5 }}>
        <Text style={{ fontSize: 20 }}>Location</Text>
        <Text style={styles.text}>
          218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor
          incididunt ut labore et…
        </Text>
      </View>
      {/* View ก้อนที่ 2 */}
      <View style={styles.container}>
        <Image style={styles.imgs} source={require("@/assets/week3/map.jpg")} />
      </View>
    </View>
  );
};

export default Section6;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imgs: {
    flex: 1,
    resizeMode: "cover",
    aspectRatio: 4 / 2,
  },
  text: {
    color: "#444444",
    padding: 5,
  },
});
