import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Firebase from "../config";

const auth = Firebase.auth();

export default class HomeScreen extends Component {
  handleSignout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="sign out" onPress={this.handleSignout} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
