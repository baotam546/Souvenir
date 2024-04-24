import AsyncStorage from "@react-native-async-storage/async-storage";
import { get,post } from "./ApiCaller";

let productUrl = `/order`;
export const profileApi = {
    getAllOrder: async() => {
        const token = await AsyncStorage.getItem("userToken");
        console.log("token", token);
        return get(`${productUrl}/`,{},{Authorization: `Bearer ${token}`}
    );
    }
};