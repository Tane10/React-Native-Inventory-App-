import React from "react";
import {} from "native-base";
import {createAppContainer,createStackNavigator} from 'react-navigation'

import HomeScreen from "./screens/HomeScreenNativeBase"
import SearchItems from "./screens/SearchItemsScreen"
import ManageItems from "./screens/ManageItems"

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    SearchItems: SearchItems,
    ManageItems: ManageItems
  },
  {
    initialRouteName: "SearchItems"
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
