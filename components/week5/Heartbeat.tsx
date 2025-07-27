import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Heartbeat = () => {
   const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <FontAwesome name="heart" size={32} color="orange" />
        </TouchableOpacity>

        <Text style={styles.count}>{count}</Text>

        <TouchableOpacity onPress={() => setCount(0)}>
          <FontAwesome name="trash" size={28} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
   
  );
};

export default Heartbeat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  count: {

    fontSize: 28,
    fontWeight: "bold",
    marginHorizontal: 100,
    color: "#333",
  },
});
