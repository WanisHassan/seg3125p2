import React, { useState } from "react";
import FormInput from "../../components/shared/FormInput";

import "./index.css";
import Button from "../../components/shared/Button";
import { validate } from "../../utils/utils";
import Footer from "../../components/Footer";
import { useUserContext } from "../../context/user/user.provider";
import { useProductsContext } from "../../context/products/products.provider";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const [fields, setFields] = useState({
    shoe_name: "",
    size: "",
    price: "",
    color: "",
    condition: "",
    image_url: "",
    brand: "",
  });

  const [errors, setErrors] = useState({
    shoe_name: "",
    size: "",
    price: "",
    color: "",
    condition: "",
    image_url: "",
    brand: "",
  });

  const { user } = useUserContext();
  const { addProduct } = useProductsContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(fields);
    if (Object.keys(errors).length) {
      return setErrors(errors);
    }
    setErrors({});
    addProduct({
      shoe_name,
      size,
      price,
      color,
      condition,
      image_url,
      brand,
      seller: user?.email,
    });
    navigate("/sneakers/more-brands");
    alert("Product Added");
  };

  const { shoe_name, size, price, color, condition, brand, image_url } = fields;

  return (
    <>
      <div className="sell-container">
        <h2>Post New Listing</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="shoe_name"
            onChange={handleChange}
            value={shoe_name}
            error={errors.shoe_name}
            label="Shoe Name*"
          />
          <FormInput
            type="text"
            name="size"
            onChange={handleChange}
            value={size}
            error={errors.size}
            label="Size*"
          />
          <FormInput
            type="number"
            name="price"
            onChange={handleChange}
            value={price}
            error={errors.price}
            label="Price*"
          />
          <FormInput
            type="text"
            name="color"
            onChange={handleChange}
            value={color}
            error={errors.color}
            label="Color*"
          />
          <FormInput
            type="text"
            name="condition"
            onChange={handleChange}
            value={condition}
            error={errors.condition}
            label="Condition*"
          />
          <FormInput
            type="text"
            name="brand"
            onChange={handleChange}
            value={brand}
            error={errors.brand}
            label="Brand*"
          />
          <FormInput
            type="text"
            name="image_url"
            onChange={handleChange}
            value={image_url}
            error={errors.image_url}
            label="Image URL*"
          />
          {user ? (
            <Button fullWidth type="submit">
              Post Sneaker Listing
            </Button>
          ) : (
            <p className="login-message">You need to login to Post a listing</p>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Sell;
