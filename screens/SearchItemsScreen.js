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
  List
} from "native-base";
import { Font } from "expo";

//Item Array constant with an ID,title and amount key and value 
const ItemArray = [
  { id: 1, title: "Front Wheel", Amount: 2 },
  { id: 2, title: "Throttle", Amount: 9765 },
  { id: 3, title: "Profile", Amount: 20 },
  { id: 4, title: "Logout", Amount: 97 }
];

class SearchItemsScreen extends React.Component {
  state = {
    fontIsReady: false
  };

  componentWillMount() {
    this.LoadAssetsAsync();
  }

  //Load font before page loads  catch any errors into console log if the font hasn't loaded 
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
  //Render the search bar and list the title and amount from the array
  render() {
    if (this.state.fontIsReady) {
      return (
        <Container>
          <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
          <Content>
            <List
              dataArray={ItemArray}
              renderRow={data => (
                <ListItem>
                  <Text>
                    {data.title}. {data.Amount}
                  </Text>
                </ListItem>
              )}
            />
          </Content>
        </Container>
      );
    }
    return null;
  }
}

export default SearchItemsScreen;
