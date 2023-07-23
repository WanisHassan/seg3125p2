import React from "react";

import FormInput from "../../components/shared/FormInput";

import "./index.css";
import Button from "../../components/shared/Button";

import { BsPaypal } from "react-icons/bs";
import { validate } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();
  const [fields, setFields] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    state: "",
    card_number: "",
    card_name: "",
    card_expiry: "",
    card_cvc: "",
  });

  const [errors, setErrors] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    state: "",
    card_number: "",
    card_name: "",
    card_expiry: "",
    card_cvc: "",
  });

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
    navigate("/confirmation");
  };

  const { first_name, last_name, email, address, city, zip, country, state } =
    fields;
  return (
    <div className="shipping-grid">
      <div className="shipping-address-container">
        <div className="shipping-address-header">
          <h2>Shipping Address</h2>
        </div>
        <div className="shipping-address-body">
          <div className="shipping-address-form">
            <form>
              <FormInput
                type="text"
                name="first_name"
                onChange={handleChange}
                value={first_name}
                error={errors.first_name}
                label="First Name*"
              />
              <FormInput
                type="text"
                name="last_name"
                onChange={handleChange}
                value={last_name}
                error={errors.last_name}
                label="Last Name*"
              />
              <FormInput
                type="text"
                name="email"
                onChange={handleChange}
                value={email}
                error={errors.email}
                label="Email Address*"
              />
              <FormInput
                type="text"
                name="address"
                onChange={handleChange}
                value={address}
                error={errors.address}
                label="Address*"
              />
              <FormInput
                type="text"
                name="city"
                onChange={handleChange}
                value={city}
                error={errors.city}
                label="City*"
              />
              <FormInput
                type="text"
                name="zip"
                onChange={handleChange}
                value={zip}
                error={errors.zip}
                label="Zip*"
              />
              <FormInput
                type="text"
                name="country"
                onChange={handleChange}
                value={country}
                error={errors.country}
                label="Country*"
              />
              <FormInput
                type="text"
                name="state"
                onChange={handleChange}
                value={state}
                error={errors.state}
                label="State*"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="payment-container">
        <div className="payment-header">
          <h2>Payment</h2>
        </div>
        <div className="payment-body">
          <div className="payment-form">
            <form onSubmit={handleSubmit}>
              <FormInput
                type="text"
                name="card_number"
                onChange={handleChange}
                value={fields.card_number}
                error={errors.card_number}
                label="Card Number*"
              />
              <FormInput
                type="text"
                name="card_name"
                onChange={handleChange}
                value={fields.card_name}
                error={errors.card_name}
                label="Name on Card*"
              />
              <FormInput
                type="text"
                name="card_expiry"
                onChange={handleChange}
                value={fields.card_expiry}
                error={errors.card_expiry}
                label="Expiration Date*"
              />
              <FormInput
                type="text"
                name="card_cvc"
                onChange={handleChange}
                value={fields.card_cvc}
                error={errors.card_cvc}
                label="CVC*"
              />
              <Button isPaypal type="submit">
                <BsPaypal />
                <span>Pay with Paypal</span>
              </Button>
              <Button type="submit">Complete Checkout</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
