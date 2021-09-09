import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import Firebase from "../config";

export default class SignupScreen extends Component {
  state = {
    emailid: "",
    password: "",
    confirmpassword: "",
    error: "",
  };
  handleSignin = () => {
    if (
      (this.state.emailid &&
        this.state.password &&
        this.state.confirmpassword) != ""
    ) {
      if (this.state.password == this.state.confirmpassword) {
        const auth = Firebase.auth();
        auth
          .createUserWithEmailAndPassword(
            this.state.emailid,
            this.state.password
          )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            this.setState({ error: error.message });
            // ..
          });
      } else {
        this.setState({ error: "Passwords do not match." });
      }
    } else {
      this.setState({ error: "Please fill all fields." });
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{ alignSelf: "flex-start", marginLeft: "5%", bottom: 40 }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Icon name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Account</Text>
        <Text style={styles.subHeaderText}>Please fill these details</Text>
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
            secureTextEntry
            value={this.state.password}
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
            placeholder="CONFIRM PASSWORD"
            secureTextEntry
            onChangeText={(text) => {
              this.setState({ confirmpassword: text });
            }}
            value={this.state.confirmpassword}
          />
        </View>
        <Text style={styles.errorMessage}>{this.state.error}</Text>
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
            Sign Up
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 30,
    fontFamily: "PoppinsMedium",
  },
  subHeaderText: {
    fontSize: 18,
    fontFamily: "PoppinsRegular",
    color: "#aaa",
    marginBottom: 40,
  },
  input: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
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
