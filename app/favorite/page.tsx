'use client'
import React, { useState } from "react";
import { FaHeartBroken } from "react-icons/fa";

type FavoriteItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const initialFavoriteItems: FavoriteItem[] = [
  {
    id: 1,
    name: "Product 1",
    price: 200,
    image: "/vision-pro-sm.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 300,
    image: "/playstation-sm.png",
  },
  {
    id: 3,
    name: "Product 2",
    price: 300,
    image: "/macbook-model-sm.png",
  },
  {
    id: 4,
    name: "Product 2",
    price: 300,
    image: "/airpods-pro-sm.png",
  },
];

const FavoritesPage: React.FC = () => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>(initialFavoriteItems);

  const handleRemoveFavorite = (id: number) => {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-center py-3 text-gray-800 mb-6">Favorite Products</h2>

        {/* Favorite Items */}
        <div className="space-y-4">
          {favoriteItems.length > 0 ? (
            favoriteItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleRemoveFavorite(item.id)}
                >
                  <FaHeartBroken className="text-lg" />
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No favorite products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
