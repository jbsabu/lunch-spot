import { Text, StyleSheet, View, ScrollView } from "react-native";

export default function RestarauntList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaraunt List</Text>
      <ScrollView style = {styles.list}>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 700,
    marginTop: 8,
    marginVertical: 8,
    color: "#151B54",
  },
  container: {
    flex: 1,
    backgroundColor: "pink",
    marginTop: 56,
    marginBottom: 24,
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  list: {
    width: "100%",
    borderColor: "red",
    borderWidth: 2,
  },
});
