"use client";

import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Apple iPhone 14 Pro Max 128GB", price: 900, image: "/product1.png" },
  { id: 2, name: "Blackmagic Pocket Cinema Camera", price: 2535, image: "/product3.png" },
  { id: 3, name: "Apple Watch Series 9 GPS 41mm", price: 399, image: "product2.png" },
  { id: 4, name: "AirPods Max Silver", price: 549, image: "/product4.png" },
];

const ProductSection: React.FC = () => {
  const { favoriteItems, addToFavorites, removeFromFavorites } = useFavorites();

  const isFavorite = (id: number) => favoriteItems.some((item) => item.id === id);

  return (
    <div className="p-4 pb-24 bg-[#FAFAFA]">
      <h2 className="text-3xl pb-10 font-bold mb-4 text-center">New Arrival</h2>
      <div className="grid gap-4 grid-cols-2 px-1 sm:px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-gray-100 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow relative h-[300px]"
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 cursor-pointer"
              onClick={() =>
                isFavorite(product.id)
                  ? removeFromFavorites(product.id)
                  : addToFavorites(product)
              }
            >
              {isFavorite(product.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            </button>
            <img src={product.image} alt={product.name} className="w-24 h-24 object-contain mb-4" />
            <span className="text-center text-sm font-medium">{product.name}</span>
            <span className="mt-2 text-center text-lg font-bold">${product.price}</span>
            <button className="mt-4 px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
