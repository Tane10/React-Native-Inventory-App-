import React from "react";
import { AppLoading, Font } from "expo";

import Roboto from "../../node_modules/@expo/vector-icons/fonts/Roboto.ttf";

import RobotoMedium from "../../node_modules/@expo/vector-icons/fonts/Roboto_medium.ttf";

export default class AppFontLoader extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentWillMount() {
    try {
      await Font.loadAsync({
        Roboto,

        RobotoMedium
      });

      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log("error loading icon fonts", error);
    }
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }

    return this.props.children;
  }
}

