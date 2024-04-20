import axios from "axios";
import { createContext, useContext, useState } from "react";
import { loginApi } from "../utils/api/login";

interface AuthProps{
    authState?: {
        token:String | null;
        authenticated: boolean | null;
    };
    onRegister?: (email: String, password: String) => Promise<any>;
    onLogin?: (email: String, password: String) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const TOKEN_KEY = 'my_token';
export const API_URL = ''
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}: any) => {
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated: null,
    })

    const register = async (email: string, password: string) => {
        try {
            const res =  await loginApi.register(email,password);
            setAuthState({
                token: res.data.token,
                authenticated: true
            })
        } catch (error) {
            return {
                error: true, msg: (error as any ).response.data.msg
            }
        }
    }
    
    const value = {
        onRegister: register,
        authState: authState
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}