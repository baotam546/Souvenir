import React, { useContext, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";


import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
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

      <View
      style={{
        flex: 1,
        width: "90%",
        // justifyContent: "center",
        alignSelf: "center",
      }}>
         <Input
          style={styles.inputBox}
          value={email}
          onChangeText={setEmail}
          placeholder={"Username or Email"}
          leftIcon={{
            type: "font-awesome",
            name: "user",
            style: { opacity: 0.7 },
          }}
        />
        
        <Input
          style={styles.inputBox}
          value={password}
          onChangeText={setPassword}
          placeholder={"Password"}
          secureTextEntry={true}
          leftIcon={{
            type: "font-awesome",
            name: "lock",
            style: { opacity: 0.7 },
          }}
        />
      
      <TouchableOpacity
          style={{ alignSelf: "flex-end", marginLeft: 20 }}
          onPress={() => {
            console.log("Forgot Password");
          }}
        >
          <Text
            style={{
              marginRight: 10,
              color: "red",
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
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
      </View>
      <View style={styles.alternativeLoginContainer}>
        <Text style={styles.altTextHeader}>- OR continue with -</Text>
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialLoginButton}>
            <Image
              source={require("../../assets/google-icon-4x.png")}
              resizeMode="stretch"
              style={{ width: '100%', height: '100%' }}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginButton}>
            <Icon name="apple" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginButton}>
            <Icon name="facebook" size={24} color="#3D4DA6" />
          </TouchableOpacity>
        </View>
        <View style={styles.altTextFooterContainer}>
          <Text style={styles.altTextFooter}>Create An Account  </Text>
          <TouchableOpacity
          onPress={() => navigate.navigate('Register')}>
            <Text style={styles.altTextFooterNav}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 16,

  },
  button: {
    padding: 12,
    marginVertical: 40,
    color: "white",
    backgroundColor: "#F83758",
    width: "100%",
    alignSelf: "center",
    borderRadius: 5,
    fontWeight: "bold",
  },
  alternativeLoginContainer: {
    flex: 1,
    // justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  socialLoginButton: {
    width: 50,
    height: 50,
    // padding: 10,
    margin: 5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCF3F6",
    borderColor: "#F83758",
    borderWidth: 1,
  },
  altTextHeader: {
    fontSize: 16,
    paddingVertical: 15,
    color: "black",
    textAlign: "center",
    opacity: 0.7,
  },
  altTextFooter: {
    fontSize: 16,
    paddingVertical: 15,
    color: "black",
    opacity: 0.7,
  },
  altTextFooterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    
  },
  altTextFooterNav: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
});
