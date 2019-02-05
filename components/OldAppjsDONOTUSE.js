import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HomeScreenButtons from "./components/SearchInventoryButton";

export default class App extends React.Component {
  goToSearchScreen = () => {
    console.log("you've pressed the button ");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Motobike Parts Inventory </Text>
        <HomeScreenButtons onGoToSearchScreen={this.goToSearchScreen} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18
  }
});
