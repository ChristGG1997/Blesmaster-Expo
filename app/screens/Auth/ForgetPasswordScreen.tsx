import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function ForgetPasswordScreen() {
    return (
      <View style={styles.container}>
        <Text>On Boarding</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})