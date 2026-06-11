import { View, Text, TouchableOpacity } from "react-native";

export default function Onboarding() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: "#F8FAFC",
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Aurora
      </Text>

      <Text
        style={{
          fontSize: 22,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        Understand Yourself Better Every Day
      </Text>

      <Text
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: 40,
        }}
      >
        Track hydration, habits, sleep and receive personalized AI insights.
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#3B82F6",
          paddingHorizontal: 30,
          paddingVertical: 15,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}