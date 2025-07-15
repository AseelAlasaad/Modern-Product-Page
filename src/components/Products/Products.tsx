import React from "react";
import { useQuery } from '@tanstack/react-query'
import { ProductCard } from "../Product/ProductCard";
interface Product {
  id: number
  title: string
  price: number
  image: string

}
const Products: React.FC = () => {
  const { isPending, error, data } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () =>
      fetch('https://fakestoreapi.com/products').then((res) => res.json()),
  })

  if (isPending) return <div className="text-center mt-8">Loading...</div>

  if (error instanceof Error)
    return <div className="text-red-500">Error: {error.message}</div>

  return (
    <div className="max-w-6xl p-4 mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center"> All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 ">
        {data && data.length > 0 ? (
          data.map((product) => (
            <div key={product.id}>
               <ProductCard
                 id={product.id}
                 title={product.title}
                 price={product.price}
                 image={product.image}
               />
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
