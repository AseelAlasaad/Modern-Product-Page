import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
export function Header() {
  return (
    <header>
       <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
         <h1 className="text-3xl font-bold">My App</h1>
        <nav>
            <ul className="flex space-x-4">

            <li>
                <Link to="/">Products</Link>
            </li>
            <li>

                <Link to="/cart">
                <ShoppingCartIcon className="h-6 w-6 inline-block" />
                </Link>
            </li>
            </ul>
        </nav>
       </div>
    </header>
  );
}