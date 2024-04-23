import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";
import { loginApi } from "../utils/api/login";
import axios from "axios";

interface AuthContextType {
  login: (username: string, password: string) => void;
  logout: () => void;
  userToken: string;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
interface AuthProviderProps {
  children: ReactNode;
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState("");

  const login = async (username: string, password: string) => {
    try {
      // setIsLoading(true);
      const res = await loginApi.login(username, password);
      console.log("login res", res);
      if (res.status == 200) {
        console.log("response data", res.data);
        const token = res.data.data.accessToken;
        console.log("token", token);
        setUserToken(token)
        AsyncStorage.setItem("userToken", token);
      }

    } catch (error) {
      console.log("login error", error);
    }
  };

  // const login = async (username: string, password: string) => {
  //   try {
  //     setIsLoading(true);
  //     const res = await axios.post("https://59e3-171-239-141-239.ngrok-free.app/api/auth/login", { username, password });
  //     if (res.status == 200) {
  //       const token = res.data.accessToken;
  //       AsyncStorage.setItem("userToken", token);
  //       setUserToken(token);
  //       setIsLoading(false)
  //     }

  //   } catch (error) {
  //     console.log("login error", error);
  //   }
  // };

 
  
 

  const logout = async() => {
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

  const authContextValue: AuthContextType = {
    login,
    logout,
    userToken,
    isLoading,
    setIsLoading
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
