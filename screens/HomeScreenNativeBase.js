import React from "react";
import { StatusBar } from "react-native";
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

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          {" "}
          {/* content padder adds margins all around the content*/}
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
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("ManageItems")}
          >
            <Text>Manage Items</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
