import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';

{/* importing all the screens that my app will be using */}
import HomeScreen from './screens/HomeScreen';
import SearchItems from "./screens/SeachItems";

{/* thi is the old way of me trying to set up navigation 
const App = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: "Home"
    }
  },
  First: {
    screen: SearchItems,
    navigationOptions: {
      headerTitle: "Search Items"
    }
  }
});

*/}