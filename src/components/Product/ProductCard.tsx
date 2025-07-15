import React from "react";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
    title: string;
    price: number;
    image: string;
}
//the data in localstorage is saved as an array of objects
// I need when click on the button to add the product to the cart
// so I need to create a function that will add the product to the cart
// and save it in localstorage
// and then I will use this function in the button onClick event

export function ProductCard({ title, price, image }: ProductCardProps) {
    
    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push({ title, price, image });
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden flex flex-col justify-between p-4 h-full hover:scale-105">

            <div className="bg-white-100 border rounded-md h-48 flex items-center justify-center mb-4 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full object-contain"
                />
            </div>


            <h2 className="text-sm font-medium text-black-bold mb-2 line-clamp-2 h-10">
                {title}
            </h2>

            <p className="text-lg font-bold text-black mb-4">${price.toFixed(2)}</p>

            <button  onClick={addToCart} className="mt-auto bg-black text-white py-2 px-4 rounded text-sm  transition">
                <ShoppingCartIcon className="h-5 w-5 inline-block mr-2" />
                Add to Cart
            </button>
        </div>
    );
}
