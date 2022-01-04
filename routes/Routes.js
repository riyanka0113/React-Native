import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import About from "../screens/About";
import Home from "../screens/Home";
import ReviewDetail from "../screens/ReviewDetail";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function nav({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#95187d" },
        headerTintColor: "#FFF"
      }}
    >
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerTitle: (props) => <Header {...props} title="GameZone" />,
          headerLeft: () => (
            <Ionicons
              name="ios-menu-outline"
              size={25}
              color="#fff"
              onPress={() => navigation.toggleDrawer()}
              style={{ marginHorizontal: "11px" }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Review Detail"
        component={ReviewDetail}
        options={{
          headerTitle: (props) => <Header {...props} title="Review Detail" />,
        }}
      />
    </Stack.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#95187d" },
          headerTintColor: "#fff",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={nav}
          options={({ route }) => ({ headerShown: false })}
        />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
