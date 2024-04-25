import React, { useContext, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { Input } from "@rneui/themed";

import { useNavigation  } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

type RootStackParamList = {
  Login: undefined;
  Details: { itemId: number };
};
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function RegisterScreen({ navigation }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [givenName, setGivenName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigation();
  const authContext = useContext(AuthContext);
  const register = authContext?.register;
  
  
  // const [login, setLogin] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Create an{"\n"}account</Text>

      <View
        style={{
          flex: 1,
          width: "90%",
          alignSelf: "center",
        }}
      >
        <Input
          style={styles.inputBox}
          value={username}
          onChangeText={setUsername}
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
        <Input
          style={styles.inputBox}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder={"Confirm Password"}
          secureTextEntry={true}
          leftIcon={{
            type: "font-awesome",
            name: "lock",
            style: { opacity: 0.7 },
          }}
        />
        <Input
  style={styles.inputBox}
  value={familyName}
  onChangeText={setFamilyName}
  placeholder={"Family Name"}
  leftIcon={{
    type: "font-awesome",
    name: "user",
    style: { opacity: 0.7 },
  }}
/>
<Input
  style={styles.inputBox}
  value={givenName}
  onChangeText={setGivenName}
  placeholder={"Given Name"}
  leftIcon={{
    type: "font-awesome",
    name: "user",
    style: { opacity: 0.7 },
  }}
/>
<Input
  style={styles.inputBox}
  value={phoneNumber}
  onChangeText={setPhoneNumber}
  placeholder={"Phone Number"}
  leftIcon={{
    type: "font-awesome",
    name: "phone",
    style: { opacity: 0.7 },
  }}
/>
<Input
  style={styles.inputBox}
  value={email}
  onChangeText={setEmail}
  placeholder={"Email"}
  leftIcon={{
    type: "font-awesome",
    name: "envelope",
    style: { opacity: 0.7 },
  }}
/>
        <Text
          style={{
            marginHorizontal: 10,
            color: "black",
            fontSize: 16,
            fontWeight: "300",
            opacity: 0.7,
          }}
        >
          By clicking the <Text style={{ color: "red" }}>Create Account</Text>{" "}
          button, you agree to the public offer
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log(email, password);
            register && register(username, password, confirmPassword, "customer", familyName, givenName, phoneNumber, email);
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Create Account
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
              style={{ width: "100%", height: "100%" }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginButton}>
            <Icon name="apple" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginButton}>
            <Icon name="facebook" size={24} color="#3D4DA6" />
          </TouchableOpacity>
        </View>
        <View style={styles.altTextFooterContainer}>
        <Text style={styles.altTextFooter}>
          I Already Have an Account
          </Text>
          <TouchableOpacity
          onPress={() => navigate.navigate('Login')}>
            <Text style={styles.altTextFooterNav}> Login</Text>
          </TouchableOpacity>
        
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerText: {
    paddingTop: 50,
    paddingBottom: 10,
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
  },
  alternativeLoginContainer: {
    margin: 0,
    padding: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  socialLoginContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  socialLoginButton: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCF3F6",
    borderColor: "#F83758",
    borderWidth: 1,
  },
  altTextFooterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 40,
  },
  altTextHeader: {
    fontSize: 16,
    marginBottom: 8,
    // marginTop: 40,
    color: "black",
    textAlign: "center",
    opacity: 0.7,
  },
  altTextFooter: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    opacity: 0.7,
  },
  altTextFooterNav: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
});
