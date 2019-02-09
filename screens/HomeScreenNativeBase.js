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
  CardItem
} from "native-base";
import { Font } from "expo";

class HomeScreen extends React.Component {
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
          <Header />
          <Content padder>
            {/* content padder adds margins all around the content*/}
            <Card transparent >
              <CardItem cardBody>
                <Image
                  style={{ resizeMode: "cover" ,width: 100, height: 100, flex: 1 , justifyContent:'center', alignItems: 'center'}}
                  source={require('../assets/MotobikePartInABox.jpg')}
                />
              </CardItem>
            </Card>

            <Card>
              <CardItem>
              <Text>Motobike Part Invetory</Text>
              </CardItem>
            </Card>
            <Button
              full
              rounded
              dark
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("SearchItems")}
            >
              <Text>Search Items</Text>
            </Button>
            <Button
              full
              rounded
              dark
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("ManageItems")}
            >
              <Text>Manage Items</Text>
            </Button>
          </Content>
        </Container>
      );
    }
    return null;
  }
}

export default HomeScreen;
