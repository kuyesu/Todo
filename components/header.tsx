import React from 'react'
import { View, Text, StyleSheet} from "react-native";

function header({title}: any) {
  return (
    <View style={styles.main}>
          <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        height: 60,
        padding: 15,
    },
})
export default header