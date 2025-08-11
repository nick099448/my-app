import Height from "@/components/week9/Height";
import WeightChart from "@/components/week9/WeightChart";
import React from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";

export default function YourHealth() {
  return (
    <ScrollView style={styles.container}>
      <Height />
      <WeightChart />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === "ios" ? 50 : 20, // เผื่อ Safe Area บน iOS
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    flex: 1,
    borderRadius: 8, // ให้ดูสวยบน iOS
    fontSize: 16,
  },
  displayContainer: {
    marginTop: 20,
  },
  displayText: {
    fontSize: 18,
    marginBottom: 5,
    color: "#444",
  },
});