import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";
import { loginApi } from "../utils/api/login";
import axios from "axios";
import { ToastAndroid } from "react-native";

interface AuthContextType {
  login: (username: string, password: string) => void;
  logout: () => void;
  register: (
    username: string,
    password: string,
    confirmPassword: string,
    accountType: string,
    familyName: string,
    givenName: string,
    phone: string,
    email: string
  ) => void;
  userToken: string;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isInvalid: boolean;
  resRegister: boolean;
}
export const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
  register: () => {},
  userToken: "",
  isLoading: false,
  setIsLoading: () => {},
  isInvalid: false,
  resRegister: false,
});
interface AuthProviderProps {
  children: ReactNode;
}
// change this URL to your local server using ngrok or deploy your server to the cloud
const baseURL = " https://presumably-social-liger.ngrok-free.app/api";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [resRegister, setResRegister] = useState(false);

  const login = async (username: string, password: string) => {
    try {
      setIsLoading(true);
      const res = await loginApi.login(username, password);
      if (res.status == 200) {
        console.log("response data", res.data);
        const token = res.data.data.accessToken;
        console.log("token", token);
        setUserToken(token);
        await AsyncStorage.setItem("userToken", token);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("login error", error);
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      setUserToken("");
      await AsyncStorage.removeItem("userToken");
      setIsLoading(false);
    } catch (error) {
      console.log("logout error", error);
    }
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken || "");
      setIsLoading(false);
    } catch (error) {
      console.log("isLoggedIn erro", error);
    }
  };

  // register function
  const register = async (
    username: string,
    password: string,
    confirmPassword: string,
    accountType: string,
    familyName: string,
    givenName: string,
    phone: string,
    email: string
  ) => {
    try {
      setIsLoading(true);
      const instance = axios.create({
        baseURL: `${baseURL}/auth/register`,
      });
      instance.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          if (error.response.status !== 200) {
            console.log("register failed", error.response);
            setIsInvalid(false);
            setResRegister(true);
            setIsLoading(false);
            ToastAndroid.show("Register failed!", ToastAndroid.SHORT);
          }
          return Promise.reject(error);
        }
      );
      const res = await instance.post("", {
        account: {
          username: username,
          password: password,
          confirmPassword: confirmPassword,
        },
        accountType: accountType,
        familyName: familyName,
        givenName: givenName,
        phone: phone,
        email: email,
      });
      if (res.status == 200) {
        console.log("register success", res.data);
        setResRegister(false);
        setIsLoading(false);
        ToastAndroid.show("Register success!", ToastAndroid.SHORT);
      } else {
        console.log("register failed", res);
      }
    } catch (error) {
      console.log("register error", error);
    }
  };

  const authContextValue: AuthContextType = {
    login,
    logout,
    register,
    userToken,
    isLoading,
    setIsLoading,
    isInvalid,
    resRegister,
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
