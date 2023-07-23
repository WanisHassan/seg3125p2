import React from "react";

import "./index.css";
import Footer from "../../components/Footer";
import { useCartContext } from "../../context/cart/cart.provider";

const Confirmation = () => {
  const { clearCart } = useCartContext();

  const items = JSON.parse(localStorage.getItem("cart"));

  React.useEffect(() => {
    clearCart();
  }, []);
  
  return (
    <>
      <div className="confirmation-container">
        <h2>Purchase Confirmation</h2>
        <h4>Thank you for shopping with KickConnect</h4>
        <div className="container">
          <div>
            Order Number: <span>1234-osnsi-2023</span>
          </div>
          <div>
            Seller Name: <span>John Doe</span>
          </div>
          <table className="">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Size</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((product) => (
                <tr>
                  <td>
                    {product?.image_url && (
                      <img src={product?.image_url} alt={product?.name} />
                    )}
                  </td>
                  <td>{product?.shoe_name}</td>
                  <td>{product?.size}</td>
                  <td>{product?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Confirmation;
