'use client'
import React, { createContext, useContext, useState } from 'react';

type FavoriteItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type FavoritesContextType = {
  favoriteItems: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: number) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);

  const addToFavorites = (item: FavoriteItem) => {
    setFavoriteItems((prevItems) => {
      if (!prevItems.some((favItem) => favItem.id === item.id)) {
        return [...prevItems, item];
      }
      return prevItems; // Prevent duplicates
    });
  };

  const removeFromFavorites = (id: number) => {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
