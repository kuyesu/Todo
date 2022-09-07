import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View, Alert } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/header";
import ListItem from "./components/ListItem";
import AddItem from "./components/addItem";

export default function App() {
  const [items, setItem] = useState([
    { id: uuidv4(), text: "Typescript" },
    { id: uuidv4(), text: "Javascript" },
    { id: uuidv4(), text: "Python" },
    { id: uuidv4(), text: "Rust" },
  ]);

  const deleteItem = (id: string) => {
    setItem((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };
  const addItems = (text: any) => {
    if (text) {
      setItem((prevItems) => {
        return [{ id: uuidv4(), text }, ...prevItems];
      });
      Alert.alert("Successful", `${text.id} added`, [
        {
          text: "Close",
          style: "cancel",
        },
      ]);
    } else {
      Alert.alert("Unsuccessful", "Please add Item", [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK",},
      ]);
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
      <AddItem addItem={addItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    alignItems: "center",
    justifyContent: "center",
  },
});
