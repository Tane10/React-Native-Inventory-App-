import React from "react";
import { StackNavigator } from "react-navigation";
import { Text } from "react-native";

{/* importing all the screens that my app will be using */}
import 

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
