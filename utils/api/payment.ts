import AsyncStorage from "@react-native-async-storage/async-storage";
import { post, get } from "./ApiCaller";
import useAxiosPrivate from "../../hooks/axiosPrivate";
let createPaymentUrl = `/payment/create`;

type Product = {
  productId: string;
  name: string;
  price: string;
  quantity: number;
};

export const paymentApi = {
  createPayment: async (arr: Product[]) => {
    const token = await AsyncStorage.getItem("userToken");
    console.log(token);

    return post(
      createPaymentUrl,
      arr,
      {},
      { Authorization: `Bearer ${token}` }
    );
  },

  getPayment: async (url: string) => {
    const token = await AsyncStorage.getItem("userToken");
    return get(url, {}, { Authorization: `Bearer ${token}` });
  },
};
