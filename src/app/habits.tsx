import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HabitsScreen() {
  const [walk, setWalk] = useState(false);
  const [water, setWater] = useState(false);
  const [meditation, setMeditation] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Habits</Text>

      <TouchableOpacity style={styles.card} onPress={() => setWalk(!walk)}>
        <Text>🚶 Walk 30 Minutes {walk ? "✅" : "⭕"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => setWater(!water)}>
        <Text>💧 Drink Water {water ? "✅" : "⭕"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => setMeditation(!meditation)}>
        <Text>🧘 Meditation {meditation ? "✅" : "⭕"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  title:{fontSize:28,fontWeight:"bold",marginBottom:20},
  card:{
    backgroundColor:"#fff",
    padding:20,
    borderRadius:15,
    marginBottom:15
  }
});