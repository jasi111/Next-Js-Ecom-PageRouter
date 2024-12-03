'use client'
import React, { createContext, useState, ReactNode } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: number;
  cartItems: Product[];
  addToCart: (prod: Product) => void;
  removeFromCart: (prod: Product) => void;
  notification: string;
  searchText: string;
  setSearchText: (text: string) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [items, setItems] = useState<number>(0);
  const [notification, setNotification] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

  const sendNotification = () => {
    setNotification("Item added to your cart!");
    setTimeout(() => {
      setNotification("");
    }, 1000);
  };

  const addToCart = (prod: Product) => {
    setItems((prevCount) => prevCount + 1);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === prod.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === prod.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...prod, quantity: 1 }];
      }
    });
    sendNotification();
  };

  const removeFromCart = (prod: Product) => {
    setItems((prevCount) => prevCount - 1);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === prod.id);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((item) =>
          item.id === prod.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevItems.filter((item) => item.id !== prod.id);
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        cartItems,
        addToCart,
        removeFromCart,
        notification,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
