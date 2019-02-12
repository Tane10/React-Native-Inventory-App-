/*TODO: put a search bar in the header 
  as word is inputed dynatically search 
  filter results on the screen and refresh the items display 
display items froma postgressql or the most react native friendly */
import React from "react";
import { StatusBar ,Image} from "react-native";
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  Input,
  Item
} from "native-base";
import { Font } from "expo";

class SearchItemSscreen extends React.Component {
  state = {
    fontIsReady: false
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await Font.loadAsync({
        Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),

        Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf")
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
        <Container>
          <Header searchbar rounded>
            <Item>
              <Icon name = "ios-search" />
              <Input placeholder = "Search" />
            </Item>
          </Header>
          </Container>
        );
      }return null;
  }
};


const searchItems = props => {
  return <Button title="Search Inventory" onPress={props.onGoToSearchScreen} />;
};

export default SearchItemSscreen;
