import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

function AddItem({ item, addItem }: any) {
  const [text, setText] = useState("");
  const onChange = (textValue: any) => setText(textValue);
  return (
    <View>
      <TextInput placeholder="Add Language" onChange={onChange} />
      <TouchableOpacity style={styles.main} onPress={() => addItem(text)}>
        <Text>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 60,
    padding: 15,
  },
});
export default AddItem;
