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
import { Expo, Font } from "expo";

export default class App extends React.Component {
  state = {
    appIsReady: false
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await Font.loadAsync({
        Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),

        Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf")
      });
    } catch (e) {
      console.warn("Error boi");
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }
  render() {
    if (this.state.appIsReady) {
      return (
        <Container>
          <Card>
            <CardItem>
              <Body>
                <Button full rounded dark>
                  <Text>Button</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <ListItem />
        </Container>
      );
    }
    return null;
  }
}
