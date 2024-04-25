// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { createContext, ReactNode, useEffect, useState } from "react";
// import axios from "axios";

// interface CartContextType {
//   AddToCart: (product: object, quantity: number) => void;
// RemoveFromCart: (productId: string) => void;
//   getCartItems: () => void;
//   cartItems: object[];
// }
// export const CartContext = createContext<CartContextType | undefined>(
//   undefined
// );
// interface CartProviderProps {
//   children: ReactNode;
// }

// type cartItem ={
//     id: string;
//     name: string;
//     price: number;
//     quantity: number;
// }
// export const CartProvider = ({ children }: CartProviderProps) => {

//   const [cartItems, setCartItems] = useState<cartItem[]>([]);

// const AddToCart = async (product: cartItem, quantity: number) => {
//     try {
//         const item = cartItems.find((item: cartItem) => item.id === product.id);
//         if (item) {
//             item.quantity += quantity;
//             setCartItems([...cartItems]);
//         } else {
//             setCartItems([...cartItems, { ...product, quantity }]);
//         }
//         await AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
//     } catch (error) {
//         console.log("AddToCart error", error);
//     }
// }
 
// const RemoveFromCart = async (productId: string) => {
//     try {
//         const item = cartItems.find((item: cartItem) => item.id === productId);
//         if(item){
            
//         }
//     } catch (error) {
//         console.log("RemoveFromCart error", error);
        
//     }
// }
 

//   const cartContextValue: CartContextType = {
//     AddToCart
//   };

//   return (
//     <CartContext.Provider value={cartContextValue}>
//       {children}
//     </CartContext.Provider>
//   );
// };
