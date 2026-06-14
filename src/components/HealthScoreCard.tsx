import { View, Text, StyleSheet } from "react-native";

type Props = {
  hydration: number;
  habitsCompleted: number;
  totalHabits: number;
};

export default function HealthScoreCard({
  hydration,
  habitsCompleted,
  totalHabits,
}: Props) {
  const hydrationScore = Math.min((hydration / 3000) * 50, 50);

  const habitScore =
    totalHabits > 0
      ? (habitsCompleted / totalHabits) * 50
      : 0;

  const score = Math.round(hydrationScore + habitScore);

  return (
    <View style={styles.card}>
      <Text style={styles.score}>{score}</Text>
      <Text style={styles.label}>Health Score</Text>

      <Text style={styles.status}>
        {score >= 80
          ? "Excellent"
          : score >= 60
          ? "Good"
          : "Needs Improvement"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2563EB",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  score: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
  },
  label: {
    color: "#fff",
    fontSize: 16,
  },
  status: {
    color: "#fff",
    marginTop: 8,
    fontWeight: "600",
  },
});