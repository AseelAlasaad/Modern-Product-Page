
import { useContext } from 'react';
import { CartContext } from '../../context/cart';
export default function Cart() {
  const context = useContext(CartContext);
  const cart = context?.cart || [];
  const decrease = context?.decreaseQuantity;
  const increase = context?.increaseQuantity;
  const removeItem = context?.removeFromCart;

  const totalPrice = cart.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl p-4 mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
      <div className="text-center mb-4">
        <p className="text-lg font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item: any, index: number) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white p-4 rounded shadow"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={decrease ? () => decrease(item.id) : undefined}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={increase ? () => increase(item.id) : undefined}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={removeItem ? () => removeItem(item.id) : undefined}
                    className="ml-4 text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 object-contain border bg-gray-100"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
