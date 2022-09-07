import React from "react";
import { View, Text, StyleSheet } from "react-native";

function header({ title }: any) {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 60,
    height: 40,
        textAlign: "left",
        paddingLeft: 5,

    },
    text: {
        position: "relative",
        fontSize: 20,
        paddingBotton: 10,
        textAlign: "left",
        color: "#154d56",
        textTransform: "uppercase",
        fontWeight: "900"

    }
});
export default header;
