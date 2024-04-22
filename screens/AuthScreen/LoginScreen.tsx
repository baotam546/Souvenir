import React, { useContext, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import {
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import { Input } from "@rneui/themed";
import { useNavigation  } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const authContext = useContext(AuthContext);
  const userToken = authContext?.userToken;
  const login = authContext?.login;
 
  const navigate = useNavigation();
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

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          login && login(email, password);
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <View style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.createAccoutText}>
          Create an account <Text onPress={()=>{
            navigate.navigate("Register");
          }} style={{ color: "red", alignItems:'flex-end' }}> Sign up</Text>
        </Text>
      </View>
          
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
    backgroundColor: "#f22828",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    fontWeight: "bold",
  },
  createAccoutText:{
    fontSize: 14,
    marginVertical: 8,
    color: "black",
    textAlign: "center",
  }
});
