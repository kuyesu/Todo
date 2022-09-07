import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function ListItem({ item }: any) {
  return (
    <TouchableOpacity style={styles.main}>
        <View>
              <Text>{item.text}</Text>
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
