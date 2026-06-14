import { View, Text, StyleSheet } from "react-native";

type Props = {
  hydration: number;
  habitsCompleted: number;
};

export default function InsightCard({
  hydration,
  habitsCompleted,
}: Props) {
  let insight =
    "Great start. Keep building healthy habits.";

  if (hydration < 1500) {
    insight =
      "Your hydration is low today. Try drinking another 500ml within the next hour.";
  }

  if (habitsCompleted >= 3) {
    insight =
      "Excellent consistency. Your habit completion rate is improving overall wellness.";
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        🤖 Aurora Insight
      </Text>

      <Text style={styles.text}>
        {insight}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#DBEAFE",
    padding: 20,
    borderRadius: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    lineHeight: 22,
  },
});