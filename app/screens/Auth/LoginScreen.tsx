import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function LoginScreen() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
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