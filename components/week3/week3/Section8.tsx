import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Section8 = () => {
  return (
    <View style={{ padding: 20 }}>
      {/* View ก้อนที่ 3 */}
      <View style={styles.body}>
        <View>
          <Text>Pricel</Text>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 20, color: "red" }}>$399.99</Text>
          </View>
          <View>
            <Text>AVG,Night</Text>
          </View>
        </View>
        {/* View ก้อนที่ 5 */}
      <TouchableOpacity
  style={{
    marginTop: 2,
    padding: 12,
    backgroundColor: "#ff1717ff",
    borderRadius: 8,
    alignSelf: "center",   // เพิ่มตรงนี้
  }}
  onPress={() => router.push("/test-components")}
>
  <Text style={{ color: "#fff", fontWeight: "bold" }}>Book Now</Text>
</TouchableOpacity>
      </View>
    </View>
  );
};

export default Section8;

const styles = StyleSheet.create({
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 5,
  },
});
