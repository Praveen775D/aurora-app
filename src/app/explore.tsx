import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HydrationScreen() {
  const [water, setWater] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hydration Tracker</Text>

      <Text style={styles.amount}>
        {water} ml
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setWater(water + 250)}
      >
        <Text style={styles.buttonText}>+250 ml</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setWater(water + 500)}
      >
        <Text style={styles.buttonText}>+500 ml</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setWater(water + 750)}
      >
        <Text style={styles.buttonText}>+750 ml</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  amount: {
    fontSize: 32,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3B82F6",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});