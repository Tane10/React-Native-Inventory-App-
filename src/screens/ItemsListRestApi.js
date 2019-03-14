// TODO: use expo fetch to get retive a json responce from the RESTAPI

//TODO: create a arrow funtion that calls the rest api and retives a 200, 404, 400 responce from the API

//TODO: after getting the response as a varible get the json call

//TODO: Present the data as a <View> in Native base

//TODO: Add presentation to it to make it nice

/*TODO: After add functionality to the REST API
    - CRUD GUI: Add a item using a POST call
    - Destroy an item from the DB using DELETE
    - Update an item
*/

import React from "react";
import { StatusBar, Image } from "react-native";
import {
  Container,
  Text,
  Body,
  Content,
  ListItem,
  List,
  View
} from "native-base";
import { FlatList } from "react-native-gesture-handler";

export default class ListItemsRESTAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    };
  }

  componentDidMount() {
    return fetch("http://5b72a052.ngrok.io/api/items")
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          isLoading: false,
          dataSource: responseJSON
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Container>
        <Content>
          {/*iterate through the array and show the items */}
          <FlatList
            data={this.state.dataSource}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <Text>{item.itemName}</Text>
              </View>
            )}
          />
        </Content>
      </Container>
    );
  }
}

// TODO: use expo fetch to get retive a json responce from the RESTAPI

//TODO: create a arrow funtion that calls the rest api and retives a 200, 404, 400 responce from the API
