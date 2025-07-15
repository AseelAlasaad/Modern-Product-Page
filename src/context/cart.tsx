import React, { createContext, useEffect, useState } from 'react';
export interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextProps {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;

}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) setCart(JSON.parse(stored));
    }, []);

    const addToCart = (item: CartItem) => {
        const existingItem = cart.find((i) => i.id === item.id);
        let updatedCart: CartItem[];

        if (existingItem) {
            updatedCart = cart.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
        } else {
            updatedCart = [...cart, { ...item, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (id: number) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const increaseQuantity = (id: number) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const decreaseQuantity = (id: number) => {
        const updatedCart = cart.map((item) =>
            item.id === id
                ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };


    const values = {
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    }
    return (
        <CartContext.Provider
            value={values}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;