import React from "react";
import {} from "native-base";
import {createAppContainer,createStackNavigator} from 'react-navigation'

import HomeScreen from "./src/screens/HomeScreenNativeBase"
import SearchItems from "./src/screens/SearchItemsScreen"
import ManageItems from "./src/screens/ManageItems"
//import AddItems from "./src/screens/AddItem"
import AddItems from "./src/screens/AddItemsFirebase"
import ListItems from "./src/screens/ListItems"


//TODO: clean up all pages


/*
TODO: 
      - Clean up the add item page so it fits the design
      - Add an item to firebase with muilple colums / tags (ID, Name, Amount, Quility, Quiliey Code)
      - List all items in a neat scroll box 
      - understand how item are posted to firebase and how i can query them
      - list all items with a check box next to each entry that can be used to select and delete and item
*/


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    SearchItems: SearchItems,
    ManageItems: ManageItems,
    AddItems: AddItems,
    ListItems: ListItems
  },
  {
    initialRouteName: "ManageItems"
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
