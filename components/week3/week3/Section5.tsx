import React from "react";
import { StyleSheet, View } from "react-native";
import MyIcon from "../MyIcon";

const Section5 = () => {
  return (
    <View style={{ padding: 10 }}>
      <View style={styles.body}>
        <MyIcon title="wifi" name="wifi" size={30} color="#87b7faff" />
        <MyIcon title="coffee" name="coffee" size={30} color="#87b7faff" />
        <MyIcon title="bath" name="bath" size={30} color="#87b7faff" />
        <MyIcon title="car" name="car" size={30} color="#87b7faff" />
        <MyIcon title="paw" name="paw" size={30} color="#87b7faff" />
      </View>
    </View>
  );
};

export default Section5;

const styles = StyleSheet.create({
  body: {
    flexDirection: "row",
    borderBottomWidth: 1,
  },
});
