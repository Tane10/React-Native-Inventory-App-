/*import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

//custom imports
//import HomeScreen from "./screens/HomeScreenNativeBase";
//import SearchItems from "./screens/SeachItems";
//import ManageItems from "./screens/ManageItems";
//import AppFontLoader from "./src/utils/FontLoader";
import { View } from "native-base";


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


class App extends React.Component {
  state = {
    fontLoaded : false,
  };

  componentDidMount(){
    Font.loadAsync({
        'Roboto' : require('../node_modules/@expo/vector-icons/fonts/Roboto.tff')
    });

    this.setState({fontLoaded:true });
}
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {
        this.state.fontLoaded ? (
          <Text style={{ fontFamily: 'Roboto', fontSize: 56 }}> </Text>
        ):null

      }
        
      </View>
    );
  }
}

export default App; */