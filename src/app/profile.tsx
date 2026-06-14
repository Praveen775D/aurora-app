import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <Text>Name: Praveen</Text>
      <Text>Age: 22</Text>
      <Text>Goal: Healthy Lifestyle</Text>
      <Text>Target Water: 3000 ml</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:20
  }
});