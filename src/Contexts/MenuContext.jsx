// src/contexts/MenuContext.jsx
import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

const initialMenu = [
  {
    id: 1,
    name: "Burger",
    category: "Makanan",
    stock: 100,
    price: 25000,
  },
  {
    id: 2,
    name: "Esteh",
    category: "Minuman",
    stock: 100,
    price: 11000,
  },
  {
    id: 3,
    name: "Nasi Goreng",
    category: "Makanan",
    stock: 78,
    price: 17000,
  },
  {
    id: 4,
    name: "Bolu Coklat",
    category: "dessert",
    stock: 88,
    price: 28000,
  },
];

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(initialMenu);
  const [searchTerm, setSearchTerm] = useState("");

  const addItem = (newItem) => {
    setMenu([...menu, { ...newItem, id: Date.now() }]);
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        searchTerm,
        setSearchTerm,
        addItem,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within an MenuProvider");
  }
  return context;
};
