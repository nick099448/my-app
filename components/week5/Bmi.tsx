import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function Bmi() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("0");
  const [body, setBody] = useState("0");

  const onPressButton = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    let output = w / (h * h);
    setBmi(output.toFixed(2));

    let description = "";
    if (output < 18.5) description = "UNDEERWEIGHT";
    else if (output >= 18.5 && output <= 24.99) description = "NORMAL";
    else if (output >= 25 && output <= 29.99) description = "OVERWEIGHT";
    else if (output >= 30 && output <= 38.00) description = "OBESE";
    else description = "EXTREMELY OBESE";
    setBody(description);

  };
 

  

  return (
    <View style={styles.container}>
      <View style={styles.bodycontainer}>
        <Text>Weight (kg.)</Text>
        <TextInput
          value={weight}
          onChangeText={(newWeight) => setWeight(newWeight)}
          placeholder="Input your Weight …"
          placeholderTextColor="rgba(0,0,0,0.3)"
        />
      </View>
      <View style={styles.bodycontainer}>
        <Text>Height (cm.)</Text>
        <TextInput
          value={height}
          onChangeText={(newHeight) => setHeight(newHeight)}
          placeholder="Input your Height …"
          placeholderTextColor="rgba(0,0,0,0.3)"
        />
      </View>

      <View style={styles.boxcontainer}>
        <View style={styles.bodycontainer1}>
          <Text style={styles.Text}>{bmi}</Text>
        </View>
        <View style={styles.bodycontainer2}>
          <Text style={styles.Text}>{body}</Text>
        </View>
      </View>
      <Button style={styles.Button} onPress={onPressButton}>
        {" "}
        Calculate{" "}
      </Button>
    </View>
  );
}
export default Bmi;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  bodycontainer: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    height: 100,
    justifyContent: "space-around",
    marginTop: 10,
  },
  boxcontainer: {
    flexDirection: "row",
  },
  bodycontainer2: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  bodycontainer1: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    borderRadius: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
  },
  Button: {
    marginTop: 20,
  },
  Text: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
});
