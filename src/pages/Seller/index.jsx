import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../context/user/user.provider";
import Footer from "../../components/Footer";

import "./index.css";
import FormInput from "../../components/shared/FormInput";
import Button from "../../components/shared/Button";
import { validate } from "../../utils/utils";
import { useProductsContext } from "../../context/products/products.provider";

const Seller = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [seller, setSeller] = React.useState(null);
  const { registeredUsers, user, postMessage } = useUserContext();
  const { products } = useProductsContext();

  React.useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (!registeredUsers) return;
    setSeller(registeredUsers.find((user) => user.id === parseInt(id)));
  }, [registeredUsers, user, id]);

  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate({ message });
    if (Object.keys(errors).length) {
      return setErrors(errors);
    }
    setErrors({});
    const { status, msg } = postMessage(
      {
        text: message,
        user_name: user.name,
        from: user.id,
        to: seller.id,
      },
      seller.id
    );
    if (status) {
      setMessage("");
    }
    alert(msg);
  };

  return (
    <>
      <div className="seller-container-grid">
        <div className="seller-info-container">
          <h1>User Information</h1>
          <h2>{seller?.name}</h2>
          <h3>
            Email: <span>{seller?.email}</span>
          </h3>
          {seller?.ratings && (
            <h3>
              Ratings: <span>{seller?.ratings}/5.0</span>
            </h3>
          )}
          <h3
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Reviews
          </h3>
          <div className="reviews-list">
            {seller?.reviews?.map((review) => (
              <div className="review">
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
          <h3
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            My Listings
          </h3>
          <div className="listings-list">
            {products
              ?.filter((product) => product.seller === seller?.email)
              .map((product) => (
                <div className="listing">
                  <img src={product.image_url} alt={product.name} />
                  <p>{product.shoe_name}</p>
                  <p>{product.brand}</p>
                  <p>{product.price}</p>
                </div>
              ))}
          </div>
        </div>
        {user?.email !== seller?.email && (
          <div className="seller-chat-container">
            <h1>Chat</h1>
            <div
              className="seller-chat-messages-container"
              style={{ height: "300px", overflowY: "scroll" }}
            >
              {seller?.messages
                ?.filter((message) => message.from === user?.id)
                .map((message) => (
                  <div
                    className={`seller-chat-message ${
                      message?.from === user?.id
                        ? "seller-chat-message-right"
                        : ""
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                ))}
            </div>

            <div className="seller-chat-messages-container">
              <FormInput
                type="text"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                error={errors.message}
                label="Send Message"
              />
              <Button onClick={handleSubmit}>Send</Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Seller;
