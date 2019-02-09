/*TODO: put a search bar in the header 
  as word is inputed dynatically search 
  filter results on the screen and refresh the items display 
display items froma postgressql or the most react native friendly */
import React from "react";
import { StatusBar, Image } from "react-native";
import {
  Container,
  Header,
  Icon,
  Button,
  Content,
  Text,
  Card,
  CardItem,
  Input,
  ListItem,
  Item,
  List,
  CheckBox
} from "native-base";
import { Font } from "expo";

class ManageItemsScreen extends React.Component {
  state = {
    fontIsReady: false
  };

  componentWillMount() {
    this.LoadAssetsAsync();
  }

  async LoadAssetsAsync() {
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
          <Header searchbar rounded transparent>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
            </Item>
          </Header>
          <Content>
            <Card>
              <CardItem>
                <List>
                  <ListItem>
                    <CheckBox checked={false} />
                    <Text> Front Wheel</Text>
                  </ListItem>
                  <ListItem>
                    <CheckBox checked={false} />
                    <Text> Front Wheel</Text>
                  </ListItem>
                  <ListItem>
                  <CheckBox checked={true} />
                    <Text>Throtal</Text>
                  </ListItem>
                  <ListItem>
                    <CheckBox checked={false} />
                    <Text>clutch</Text>
                  </ListItem>
                </List>
              </CardItem>
            </Card>
            <Button rounded dark>
              <Text>Add</Text>
            </Button>
            <Button rounded dark>
              <Text>Delete</Text>
            </Button>
          </Content>
        </Container>
      );
    }
    return null;
  }
}

export default ManageItemsScreen;
