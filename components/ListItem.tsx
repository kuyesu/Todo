import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

function ListItem({ item, deleteItem }: any) {
  return (
    <TouchableOpacity style={styles.main}>
      <View>
        <Text>{item.text}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 60,
    padding: 15,
  },
});
export default ListItem;
