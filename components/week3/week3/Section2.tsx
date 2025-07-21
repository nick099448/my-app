import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Section2() {
  return (
    <View style={{ padding: 20 }}>
      {/* View ก้อนที่ 1 */}
      <View style={styles.container}>
        <Text style={styles.textcontainer}>Hilton San Francisco</Text>
        <View style={styles.padding}>
          <View style={styles.star}>
            <FontAwesome name="star" size={20} color="orange" />
            <FontAwesome name="star" size={20} color="orange" />
            <FontAwesome name="star" size={20} color="orange" />
            <FontAwesome name="star" size={20} color="orange" />
            <FontAwesome name="star-half" size={20} color="orange" />
          </View>
        </View>
        <View>
              <Text style={styles.text}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    backgroundColor: "#e8e5e5ff",
    borderRadius: 20,
    marginTop : -35,
    
  },
  textcontainer: {
    fontSize: 20,
    textAlign: "center",
  },
star:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
},
text:{
     fontSize: 11,
     fontStyle:"normal",
    textAlign: "center",
},
padding:{
    paddingVertical:5
},
});
