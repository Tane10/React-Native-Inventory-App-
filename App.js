import React from "react";
import { StackNavigator } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => <Text> This is the home screen </Text>;

const App = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headTitle: "Home"
    }
  }
});

export default App;
