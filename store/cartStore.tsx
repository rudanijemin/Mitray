import { makeAutoObservable } from "mobx";
import { Product, CartItem } from "@/types/product";

class CartStore {
  items: CartItem[] = [];
  total: number = 0;  
  itemCount: number = 0;
  isCartOpen: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  addItem(product: Product , qty:number = 1) {
    const existing = this.items.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      this.items.push({ ...product, quantity: qty });
      this.itemCount += 1;
    }

    this.total += product.price;
  }

  removeItem(id: string) {
    const item = this.items.find((item) => item.id === id);
    if (!item) return;

    this.total -= item.price * item.quantity;
    this.itemCount -= 1;
    this.items = this.items.filter((item) => item.id !== id);
  }

  updateQuantity(id: string, quantity: number) {
    const item = this.items.find((item) => item.id === id);
    if (!item) return;

    const diff = quantity - item.quantity;
    item.quantity = quantity;
    this.total += diff * item.price;
    // this.itemCount += diff;

    if (item.quantity <= 0) {
        console.log("remove")
        this.itemCount -= 1;
        this.removeItem(id);
  }
}

setCartOpen(isOpen: boolean) {
    this.isCartOpen = isOpen;
}

  clearCart() {
    this.items = [];
    this.total = 0;
    this.itemCount = 0;
    this.isCartOpen = false;
  }
}

export const cartStore = new CartStore();
