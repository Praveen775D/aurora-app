import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function CoachScreen() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askCoach = () => {
    const q = question.toLowerCase();

    if (q.includes("sleep")) {
      setAnswer(
        "Adults generally benefit from 7-9 hours of sleep. Improving sleep consistency may improve recovery and focus."
      );
    } else if (q.includes("water")) {
      setAnswer(
        "Aim for approximately 3 liters of water daily and increase intake during physical activity."
      );
    } else if (q.includes("stress")) {
      setAnswer(
        "Short walks, breathing exercises, and meditation can help reduce stress levels."
      );
    } else {
      setAnswer(
        "Maintain hydration, sleep quality, nutrition, and activity for long-term wellness."
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Aurora AI Coach
      </Text>

      <TextInput
        value={question}
        onChangeText={setQuestion}
        placeholder="Ask a health question..."
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={askCoach}
      >
        <Text style={styles.buttonText}>
          Ask Aurora
        </Text>
      </TouchableOpacity>

      {answer ? (
        <View style={styles.answerCard}>
          <Text style={styles.answer}>
            {answer}
          </Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  answerCard: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
  },
  answer: {
    lineHeight: 22,
  },
});