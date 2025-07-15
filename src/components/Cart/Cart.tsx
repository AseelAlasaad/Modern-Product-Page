import React from "react";

export default function Cart() {

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    return (
        <div className="max-w-6xl p-4 mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
            {cart.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <ul className="space-y-4">
                    {cart.map((item: any, index: number) => (
                        <li key={index} className="flex justify-between items-center bg-white p-4 rounded shadow">
                            <div>
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                            </div>
                            <img src={item.image} alt={item.title} className="h-16 w-16 object-cover rounded" />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}