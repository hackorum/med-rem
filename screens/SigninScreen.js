import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import Firebase from "../config";

const auth = Firebase.auth();

export default class SigninScreen extends Component {
  state = {
    emailid: "",
    password: "",
    error: "",
  };
  handleSignin = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        this.state.emailid,
        this.state.password
      );
    } catch (error) {
      this.setState({ error: error.message });
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../assets/login.png")}
          style={{ width: 300, height: 300 }}
        />
        <Text style={styles.titleText}>Medicine Reminder</Text>
        <View style={styles.textIconContainer}>
          <Icon
            style={{ paddingRight: 20, top: 1 }}
            name="email"
            size={30}
            color="black"
          />
          <TextInput
            style={styles.input}
            placeholder="EMAIL ID"
            onChangeText={(text) => {
              this.setState({ emailid: text });
            }}
            value={this.state.emailid}
          />
        </View>
        <View style={styles.textIconContainer}>
          <Icon
            style={{ paddingRight: 20, top: 1 }}
            name="lock"
            size={30}
            color="black"
          />
          <TextInput
            style={styles.input}
            placeholder="PASSWORD"
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
            value={this.state.password}
            secureTextEntry
          />
        </View>
        <View style={{ width: "75%" }}>
          <Text style={styles.errorMessage}>{this.state.error}</Text>
        </View>
        <TouchableOpacity
          style={styles.signinButton}
          onPress={this.handleSignin}
        >
          <Text
            style={{
              color: "black",
              fontSize: 23,
              fontFamily: "PoppinsRegular",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "#aaaaaa", fontFamily: "PoppinsRegular" }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ top: 40 }}
          onPress={() => {
            this.props.navigation.navigate("Signup");
          }}
        >
          <Text
            style={{
              color: "#555",
              fontSize: 18,
              fontFamily: "PoppinsRegular",
            }}
          >
            Don't Have An Account?{" "}
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#333",
                fontFamily: "PoppinsMedium",
              }}
            >
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 25,
    fontFamily: "PoppinsMedium",
  },
  textIconContainer: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 35,
    padding: 20,
    margin: 20,
  },
  signinButton: {
    alignItems: "center",
    padding: 17,
    margin: 20,
    backgroundColor: "#92E3A9",
    width: "75%",
    borderRadius: 35,
  },
  errorMessage: {
    fontFamily: "PoppinsBold",
    color: "#ff0000",
    fontSize: 15,
  },
});
