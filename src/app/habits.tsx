import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HabitsScreen() {
  const [done, setDone] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Habits</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => setDone(!done)}
      >
        <Text style={styles.habit}>
          Meditation {done ? "✔️" : "⭕"}
        </Text>
        <Text>7 Day Streak 🔥</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
  },
  habit: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});