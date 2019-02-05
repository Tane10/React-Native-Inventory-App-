import React from "react";
import { Button } from "react-native";

const manageItems = props => {
  return (
    <Button
      title="Manage Inventory"
      onPress={props.onGoToMangeInvenoryScreen}
    />
  );
};

export default manageItems;
