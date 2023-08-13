// Barcha malumotlarimiz saqlanadigan Context API hisoblanadi.

import { useState, createContext, useContext, useEffect } from "react";
import { CategoryService } from "../services/CategoryService";
import { ProductService } from "../services/ProductService";

const InfoContext = createContext();

// Malumotlar omboriga kirish hookimiz.
export const useInfoContext = () => useContext(InfoContext);

export const InfoContextProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  const handleAllCategories = async () => {
    try {
      const data = await CategoryService.getAllCategory();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAllProducts = async () => {
    try {
      const data = await ProductService.getAllProduct();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAllCategories();
    handleAllProducts();
  }, []);

  const data = { categories, products };
  return (
    <InfoContext.Provider value={data}>
      <InfoContext.Consumer>{() => children}</InfoContext.Consumer>
    </InfoContext.Provider>
  );
};
