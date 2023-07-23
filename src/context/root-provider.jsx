import CartProvider from "./cart/cart.provider";
import ProductsProvider from "./products/products.provider";
import UserProvider from "./user/user.provider";

const RootProvider = ({ children }) => {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
};

export default RootProvider;
