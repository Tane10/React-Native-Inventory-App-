import React from "react";
import { StatusBar } from "react-native";
import {
  Container,
  Button,
  Body,
  text,
  ListItem,
  Text,
  Card,
  CardItem
} from "native-base";
import {createAppContainer,createStackNavigator} from 'react-navigation'

import HomeScreen from "./screens/HomeScreenNativeBase"
import SearchItems from "./screens/SeachItems"
import ManageItems from "./screens/ManageItems"

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    SearchItems: SearchItems,
    ManageItems: ManageItems
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    )
  }
}
