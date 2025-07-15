import React, {useContext } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { CartContext } from '../../context/cart';
import { Link } from 'react-router-dom';

export function Header() {

  const context = useContext(CartContext);
  const cart = context?.cart || [];

  return (
    <header>
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Products</Link>
            </li>
            <li className="relative">
              <Link to="/cart">
                <ShoppingCartIcon className="h-6 w-6 inline-block" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
