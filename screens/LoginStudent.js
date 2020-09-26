import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { Card, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

const LoginStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const profile = async () => {
    try {
      setName(await AsyncStorage.getItem("name_key"));
    } catch (error) {
      console.log(error);
    }
  };
  profile();
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Card.Content>
          <Card.Title title={`Welcome ${name}`} />
          <Card.Title title="Email" />
          <TextInput
            placeholder="Enter your valid email address"
            style={styles.inputContainer}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Card.Title title="Password" />
          <TextInput
            placeholder="Enter password"
            style={styles.inputContainer}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            color="black"
            mode="outlined"
            style={styles.btn}
            onPress={() => {
              if (email == "" || password == "") {
                Alert.alert("Error", "Please fill all the fields", [
                  { text: "Okay" },
                ]);
              } else {
                console.log("DONE");
              }
            }}
          >
            Submit
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default LoginStudent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginVertical: 150,
    marginHorizontal: 20,
    elevation: 5,
    borderRadius: 10,
  },
  inputContainer: {
    borderWidth: 1.5,
    borderRadius: 15,
    padding: 10,
  },
  btn: {
    marginVertical: 10,
    marginHorizontal: 90,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
  },
});
