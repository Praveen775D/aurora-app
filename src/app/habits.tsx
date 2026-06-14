import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const initialHabits = [
  {
    id: 1,
    title: "Drink 3L Water",
    icon: "💧",
    streak: 12,
    completed: true,
  },
  {
    id: 2,
    title: "30 Min Walk",
    icon: "🚶",
    streak: 8,
    completed: false,
  },
  {
    id: 3,
    title: "Meditation",
    icon: "🧘",
    streak: 15,
    completed: false,
  },
  {
    id: 4,
    title: "Healthy Breakfast",
    icon: "🥗",
    streak: 6,
    completed: true,
  },
];

export default function HabitsScreen() {
  const [habits, setHabits] = useState(initialHabits);

  const toggleHabit = (id: number) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? { ...habit, completed: !habit.completed }
          : habit
      )
    );
  };

  const completedCount = habits.filter((h) => h.completed).length;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Daily Habits</Text>

      <View style={styles.scoreCard}>
        <Text style={styles.score}>
          {Math.round((completedCount / habits.length) * 100)}%
        </Text>

        <Text style={styles.scoreText}>
          Habit Completion Score
        </Text>
      </View>

      <View style={styles.progressCard}>
        <Text style={styles.progressText}>
          {completedCount} of {habits.length} habits completed today
        </Text>
      </View>

      {habits.map((habit) => (
        <TouchableOpacity
          key={habit.id}
          style={[
            styles.habitCard,
            habit.completed && styles.completedCard,
          ]}
          onPress={() => toggleHabit(habit.id)}
        >
          <View>
            <Text style={styles.habitTitle}>
              {habit.icon} {habit.title}
            </Text>

            <Text style={styles.streak}>
              🔥 {habit.streak} Day Streak
            </Text>
          </View>

          <Text style={styles.status}>
            {habit.completed ? "✅" : "⭕"}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={styles.insightCard}>
        <Text style={styles.insightTitle}>
          🤖 Aurora Insight
        </Text>

        <Text style={styles.insightText}>
          Consistent meditation and hydration habits are strongly
          improving your wellness score. Keep your walking streak active
          to maximize recovery and cardiovascular health.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  scoreCard: {
    backgroundColor: "#2563EB",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 15,
  },

  score: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
  },

  scoreText: {
    color: "#fff",
    marginTop: 5,
  },

  progressCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },

  progressText: {
    fontWeight: "600",
  },

  habitCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  completedCard: {
    borderWidth: 2,
    borderColor: "#22C55E",
  },

  habitTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  streak: {
    marginTop: 5,
    color: "#f97316",
  },

  status: {
    fontSize: 24,
  },

  insightCard: {
    backgroundColor: "#DBEAFE",
    padding: 20,
    borderRadius: 18,
    marginTop: 10,
    marginBottom: 30,
  },

  insightTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 18,
  },

  insightText: {
    lineHeight: 22,
  },
});