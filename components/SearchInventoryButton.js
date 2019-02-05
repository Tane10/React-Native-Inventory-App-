import React from "react";
import { Button } from "react-native";
{
  /* this is a compant which is basicly  away to creat loads of reusable method
always use the import react to use react elements and the inpornt button lets you use the button component from react-native*/
}

const searchItems = props => {
  return <Button title="Search Inventory" onPress={props.onGoToSearchScreen} />;
};

export default searchItems;
