import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/header"
import ListItem from "./components/ListItem";

export default function App() {
  const [items, setItem] = useState([
    { id: uuidv4(), text: "Typescript" },
    { id: uuidv4(), text: "Javascript" },
    { id: uuidv4(), text: "Python" },
    { id: uuidv4(), text: "Rust" }
  ]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title="To do Application" />
      <FlatList data={items}
        renderItem={(item) => <ListItem item={item} />}
      />
      {/* add voice chat icon */}
      {/* <Image source={require(".")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202b",
    alignItems: "center",
    justifyContent: "center",
  },
});
