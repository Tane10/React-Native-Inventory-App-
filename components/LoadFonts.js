import React from "react";

import { AppLoading, Font } from "expo";

import Roboto from "./node_modules/native-base/Fonts/Roboto.ttf";

import Roboto_medium from "./node_modules/native-base/Fonts/Roboto_medium.ttf";

class AppFontLoader extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentWillMount() {
    try {
      await Font.loadAsync({
        Roboto,
        Roboto_medium
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

export { AppFontLoader };
