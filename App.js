import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import MyStack from "./navigation";

export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
