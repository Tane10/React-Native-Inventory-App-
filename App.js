import React from "react";
import { StatusBar } from "react-native";
import { Container, Button, text, ListItem, Text } from "native-base";
import Expo from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),

      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),

      Ionicons: require("./node_modules/@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
        <StatusBar hidden={true} />

        <Button>
          <Text>Button</Text>
        </Button>

        <ListItem />
      </Container>
    );
  }
}
