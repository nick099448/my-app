import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Section7 = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 16 }}>Room Type</Text>
      {/* View ก้อนที่ 1  */}
      <View style={styles.container}>
        <Image
          style={styles.body}
          source={require("@/assets/week3/room-8.jpg")}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 20 }}>Standard Twin Room</Text>

          <Text style={{ fontSize: 20, color: "red", paddingTop: 30 }}>
            $399.99
          </Text>
          <Text style={{ color: "gray" }}>
            Hurry Up! This is your last room!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Section7;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  body: {
    width: 80,
    height: 100,
    borderRadius: 8 / 2,
  },
});
