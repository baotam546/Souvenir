import AsyncStorage from "@react-native-async-storage/async-storage";
import { get,post } from "./ApiCaller";

let productUrl = `/product`;
export const productApi = {
    getAllProductList: async() => {
        const token = await AsyncStorage.getItem("userToken");
        return get(`${productUrl}/?page=1&limit=999`,{},{Authorization: `Bearer ${token}`}
    );
    }
};