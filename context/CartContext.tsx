"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { CartItem, Product } from "@/types/product";

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ state: initialState, dispatch: () => {} });

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.price,
          // itemCount: state.itemCount + 1,
        };
      } else {
        const newItem: CartItem = { ...action.payload, quantity: 1 };
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + action.payload.price,
          itemCount: state.itemCount + 1,
        };
      }
    }

    case "REMOVE_ITEM": {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      if (!itemToRemove) return state;

      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: updatedItems,
        total: state.total - itemToRemove.price * itemToRemove.quantity,
        itemCount: state.itemCount - itemToRemove.quantity,
      };
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (!item) return state;

      const quantityDiff = quantity - item.quantity;
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );

      return {
        ...state,
        items: updatedItems,
        total: state.total + item.price * quantityDiff,
        // itemCount: state.itemCount + quantityDiff,
      };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
