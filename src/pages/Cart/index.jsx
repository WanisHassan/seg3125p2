import React from "react";

import "./index.css";
import { useCartContext } from "../../context/cart/cart.provider";
import Footer from "../../components/Footer";
import Button from "../../components/shared/Button";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user/user.provider";
import { LANGUAGE_MAP } from "../../constants";

const Cart = () => {
  const { cart, removeItemFromCart } = useCartContext();
  const {language} = useUserContext();
  const navigate = useNavigate();
  return (
    <>
      <div className="cart-container">
        <h2>{LANGUAGE_MAP[language]["Cart"]}</h2>
        <table className="">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Size</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((product) => (
              <tr>
                <td>
                  {product?.image_url && (
                    <img src={product?.image_url} alt={product?.name} />
                  )}
                </td>
                <td>{product?.shoe_name}</td>
                <td>{product?.size}</td>
                <td>{product?.price}</td>
                <td>
                  <Button onClick={() => removeItemFromCart(product?.id)}>
                    Remove Item
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          {cart.length ? (
            <Button
              onClick={() => {
                navigate("/shipping");
              }}
              style={{
                marginTop: "1rem",
              }}
            >
              Checkout
            </Button>
          ) : (
            <p className="login-message">Cart is Empty</p>
          )}
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
