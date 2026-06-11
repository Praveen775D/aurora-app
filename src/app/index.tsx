import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aurora</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Daily Insight</Text>
        <Text>
          You are halfway toward your hydration goal today.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Hydration</Text>
        <Text>1200 / 3000 ml</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Habits</Text>
        <Text>2 / 5 completed</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Streak</Text>
        <Text>4 days</Text>
      </View>
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: 8,
  },
});