'use client'
import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext"; // Use the custom hook

const FavoritesPage: React.FC = () => {
  const { favoriteItems, removeFromFavorites } = useFavorites(); // Use the hook to get favorite items

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-center py-3 text-gray-800 mb-6">Favorite Products</h2>

        {/* Favorite Items */}
        <div className="space-y-4">
          {favoriteItems.length > 0 ? (
            favoriteItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b bg-gray-10 hover:bg-gray-100 transition-all">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => removeFromFavorites(item.id)} // Remove from favorites when clicked
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
