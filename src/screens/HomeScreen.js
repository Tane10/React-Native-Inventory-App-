import React from "react";
import { View, Text , Button} from "react-native";

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Motobike Part Invetory</Text>
          <Button
            title="Search Items"
            onPress={() => this.props.navigation.navigate('SearchItems')}
          />
          <Button
            title = "Manage Items"
            onPress={() => this.props.navigation.navigate('ManageItems')} />
        </View>
      );
    }
  }

export default HomeScreen;
