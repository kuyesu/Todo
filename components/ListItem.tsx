import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const ListItem = ({
  item,
  deleteItem,
  editItem,
  isEditing,
  editItemDetail,
  saveEditItem,
  handleEditChange,
  itemChecked,
  checkedItems,
}: any) => {
//   const checked = checkedItems.filter(
//     (checkedItem: { id: any; }) => checkedItem.id === item.id
//   );
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        {isEditing && editItemDetail.id === item.id ? (
          <TextInput
            placeholder="Edit Item..."
            style={styles.editItemInput}
            onChangeText={handleEditChange}
          />
        ) : (
          <Text
            onPress={() => itemChecked(item.id, item.text)}
            style={
             styles.listItemText
            }
          >
            {item.text}
          </Text>
        )}
        <View style={styles.iconView}>
          {isEditing && editItemDetail.id === item.id ? (
            <Icon
              name="save"
              size={20}
              color="green"
              onPress={() => saveEditItem(item.id, item.text)}
            />
          ) : (
            // !checked.length && (
              <Icon
                name="pencil"
                size={20}
                color="blue"
                onPress={() => editItem(item.id, item.text)}
              />
            // )
          )}
          <Icon
            name="remove"
            size={20}
            color="firebrick"
            onPress={() => deleteItem(item.id)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
        backgroundColor: "#154d56",
        margin: 2,
    borderRadius: 2
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
      fontSize: 18,
      color: "#fff"
  },
  checkedItemText: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "green",
  },
  iconView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 70,
  },
  editItemInput: {
    padding: 0,
    fontSize: 18,
  },
});

export default ListItem;
