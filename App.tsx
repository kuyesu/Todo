import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View, Alert } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/header";
import ListItem from "./components/ListItem";
import AddItem from "./components/addItem";

export default function App() {
  const [items, setItems] = useState([
    { id: uuidv4(), text: "Typescript" },
    { id: uuidv4(), text: "Javascript" },
    { id: uuidv4(), text: "Python" },
    { id: uuidv4(), text: "Rust" },
  ]);

  const deleteItem = (id: any) => {
    setItems((prevItems: any[]) => {
      return prevItems.filter((item: { id: any; }) => item.id !== id);
    });
  };
  const addItem = (text: any) => {
    if (!text) {
      Alert.alert(
        "No item entered",
        "Please enter an item when adding to your shopping list",
        [
          {
            text: "Understood",
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
    } else {
      setItems((prevItems) => {
        return [{ id: uuidv4(), text }, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title="To do Application" />
      <FlatList
        data={items}
        renderItem={(item) => <ListItem item={item} deleteItem={deleteItem} />}
      />
      {/* add items */}
      <AddItem addItem={addItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202b",
    padding: 15,
  },
});
function uuid(): string {
  throw new Error("Function not implemented.");
}
