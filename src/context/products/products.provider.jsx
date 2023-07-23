import React, { createContext, useState, useContext } from "react";
import { PRODUCTS } from "../../constants";
import { findMaxId } from "../../utils/utils";

const INITIAL_STATE = {
  products: PRODUCTS, // Listed Products
};
const ProductsContext = createContext(INITIAL_STATE);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  const postReview = (review, id) => {
    const product = products.find((product) => product.id === id);
    if (product.reviews) {
      product.reviews.push(review);
    } else {
      product.reviews = [review];
    }
    setProducts([...products.filter((product) => product.id !== id), product]);
    return { msg: "Review Posted Successfully", status: 1 };
  };

  const addProduct = (product) => {
    const id = findMaxId(products) + 1;
    setProducts([...products, { ...product, id }]);
  };

  return (
    <ProductsContext.Provider value={{ products, postReview, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);

export default ProductsProvider;
