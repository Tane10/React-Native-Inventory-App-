import React from "react";
import { StatusBar, Image } from "react-native";
import {
  Container,
  Button,
  Content,
  Text,
  Card,
  CardItem,
  Input,
  Item
} from "native-base";
import { Font } from "expo";

class AddItems extends React.Component {
  state = {
    fontIsReady: false
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await Font.loadAsync({
        Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),

        Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf")
      });
    } catch (e) {
      console.warn("Font is not loaded yet");
      console.log(e.message);
    } finally {
      this.setState({ fontIsReady: true });
    }
  }
  render() {
    if (this.state.fontIsReady) {
      return (
        <Container transparent>
          <Content padder transparent>
            {/* content padder adds margins all around the content*/}
            <Card transparent>
              <CardItem cardBody>
                <Text> Add items</Text>
              </CardItem>
            </Card>
            <Button
              full
              rounded
              dark
              style={{ marginTop: 10 }}
            >
              <Text>Add Items</Text>
            </Button>
          </Content>
        </Container>
      );
    }
    return null;
  }
}

export default AddItems;

