import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import {
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
} from "react-native";
import { Input } from "@rneui/themed";

type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
};
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome{'\n'}Back!</Text>

      <View>
        <Input
          style={styles.inputBox}
          value={email}
          onChangeText={setEmail}
          placeholder={"Username or Email"}
          
        />
        <Input
          style={styles.inputBox}
          value={password}
          onChangeText={setPassword}
          placeholder={"Password"}
          secureTextEntry={true}
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => {
          console.log(email, password);
          setLogin(true);
        }}
      >
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            color: "black",
          }}
        >
          Login
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerText: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 20,
    fontSize: 50,
    color: "black",
    textAlign: "left",
    fontWeight: "bold",

  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "black",
    textAlign: "center",
  },
  inputBox: {
    height: 55,
    padding: 15,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    margin: 12,
    fontSize: 16,
    backgroundColor: "#EDEFEE",
  },
  button: {
    padding: 10,
    marginVertical: 8,
    color: "black",
    backgroundColor: "#EE9972",
    width: "50%",
    alignSelf: "center",
    borderRadius: 20,
    fontWeight: "bold",
  },
});
