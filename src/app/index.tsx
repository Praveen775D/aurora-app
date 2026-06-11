import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Good Evening 👋</Text>
      <Text style={styles.name}>Praveen</Text>

      <View style={styles.scoreCard}>
        <Text style={styles.scoreLabel}>Health Score</Text>
        <Text style={styles.score}>78</Text>
        <Text style={styles.scoreSub}>Great Progress Today</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>💧 Hydration</Text>
        <Text style={styles.cardValue}>1200 / 3000 ml</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔥 Habits</Text>
        <Text style={styles.cardValue}>2 / 5 completed</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🌙 Sleep</Text>
        <Text style={styles.cardValue}>6h 10m</Text>
      </View>

      <View style={styles.insightCard}>
        <Text style={styles.cardTitle}>🤖 AI Insight</Text>
        <Text>
          Your hydration is improving. Consider sleeping 30 minutes earlier tonight.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 20,
  },
  greeting: {
    fontSize: 18,
    color: "#666",
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scoreCard: {
    backgroundColor: "#2563EB",
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
  },
  scoreLabel: {
    color: "#fff",
  },
  score: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold",
  },
  scoreSub: {
    color: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
  },
  insightCard: {
    backgroundColor: "#DBEAFE",
    borderRadius: 15,
    padding: 18,
    marginBottom: 20,
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 18,
  },
});