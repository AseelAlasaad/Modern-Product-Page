import { useContext } from 'react';
import { CartContext } from '../../context/cart'
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
    id?: number;
    title: string;
    price: number;
    image: string;
}


export function ProductCard({ id, title, price, image }: ProductCardProps) {
    const context = useContext(CartContext);
    const addToCart = context?.addToCart;


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

            <button
                onClick={() => {
                    if (id && addToCart) {
                        addToCart({
                            id,
                            title,
                            price,
                            image,
                            quantity: 1,
                        });
                    }
                }}
                className="mt-auto bg-black text-white py-2 px-4 rounded text-sm  transition"
            >
                <ShoppingCartIcon className="h-5 w-5 inline-block mr-2" />
                Add to Cart
            </button>
        </div>
    );
}
