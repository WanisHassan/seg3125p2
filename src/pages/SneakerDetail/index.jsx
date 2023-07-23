import React from "react";
import { useProductsContext } from "../../context/products/products.provider";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";

import "./index.css";
import Button from "../../components/shared/Button";
import ReviewForm from "../../components/ReviewForm";
import { useUserContext } from "../../context/user/user.provider";
import { getUserByEmail } from "../../utils/utils";
import { AiFillStar } from "react-icons/ai";
import { useCartContext } from "../../context/cart/cart.provider";

const SneakerDetails = () => {
  const [product, setProduct] = React.useState(null);
  const [seller, setSeller] = React.useState(null);
  const { products } = useProductsContext();
  const { user, registeredUsers } = useUserContext();
  const { addItemToCart } = useCartContext();

  const { id } = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!products) return;
    const temp = products.find((product) => product.id === parseInt(id));
    setProduct(temp);
  }, [id, products]);

  React.useEffect(() => {
    if (!registeredUsers || !product) return;
    const temp = getUserByEmail(product.seller, registeredUsers);
    setSeller(temp);
  }, [user, product, registeredUsers]);

  const handleBuy = () => {
    localStorage.setItem("cart", JSON.stringify([product]));
    addItemToCart(product);
    navigate("/shipping");
  };

  const handleMessage = () => {
    navigate(`/seller/${seller.id}`);
  };

  return (
    <>
      <div>
        <div className="sneaker-details-container">
          <div className="sneaker-details-image-container">
            <img src={product?.image_url} alt={product?.name} />
          </div>
          <div className="sneaker-details-info-container">
            <h2>{product?.shoe_name}</h2>
            <h3>
              Brand: <span>{product?.brand}</span>
            </h3>
            <h3>
              Price: <span className="price">CA${product?.price}</span>
            </h3>
            <h3>
              Size: <span className="size">{product?.size}</span>
            </h3>
            <h3>
              Color: <span>{product?.color}</span>
            </h3>
            <h3>
              Condition: <span>{product?.condition}</span>
            </h3>
            <Button
              onClick={() => {
                addItemToCart(product);
                alert("Added to cart");
              }}
              style={{ marginRight: "1rem" }}
            >
              Add to Cart
            </Button>
            {
              // If the user is logged in, show the buy button
              user ? (
                <Button onClick={handleBuy}>Buy Now</Button>
              ) : (
                <p className="login-message">Please login to buy</p>
              )
            }
          </div>
          <div className="sneaker-details-seller-info">
            <h2>Seller Info</h2>
            <h3>
              Name: <span>{seller?.name}</span>
            </h3>
            <h3>
              Email: <span>{seller?.email}</span>
            </h3>
            <h3 className="seller-ratings">
              <div>Ratings:</div>
              <AiFillStar /> <span>{seller?.ratings}/5.0</span>
            </h3>
            {
              // If the user is logged in, show the buy button
              user ? (
                <Button onClick={handleMessage}>Message</Button>
              ) : (
                <p className="login-message">Please login to Message</p>
              )
            }
          </div>
        </div>
        <div className="reviews-container">
          <h2>Reviews</h2>
          {
            // If there are no reviews, show a message
            !product?.reviews?.length ? (
              <p className="login-message">No reviews yet</p>
            ) : (
              <div className="reviews-list">
                {
                  // Map through the reviews and show them
                  product?.reviews?.map((review) => (
                    <div className="review" key={review.id}>
                      <h3>{review.user_name}</h3>
                      <p>{review.text}</p>
                    </div>
                  ))
                }
              </div>
            )
          }
          {
            // If the user is logged in, show the review form
            user ? (
              <ReviewForm product={product} />
            ) : (
              <p className="login-message">Please login to post a review</p>
            )
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SneakerDetails;
