import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text , View, Button} from 'react-native';

import HomeScreen from './screens/HomeScreen'
import SearchItems from './screens/SeachItems'
import ManageItems from './screens/ManageItems';


const RootStack = createStackNavigator (
  {
    Home: HomeScreen,
    SearchItems: SearchItems,
    ManageItems: ManageItems
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return  <AppContainer />;
  }
}

