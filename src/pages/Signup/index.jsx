import React, { useState } from "react";
import FormInput from "../../components/shared/FormInput";

import "./index.css";
import Button from "../../components/shared/Button";
import { Link } from "react-router-dom";
import { validate } from "../../utils/utils";
import { useUserContext } from "../../context/user/user.provider";
import Footer from "../../components/Footer";

const Signup = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const { registerUser } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(fields);
    if (Object.keys(errors).length) {
      return setErrors(errors);
    }
    setErrors({});
    const { name, email, password } = fields;
    const { status, msg } = registerUser({ name, email, password });
    if (status) {
      setFields({
        name: "",
        email: "",
        password: "",
      });
    }
    // Show the errors
    alert(msg);
  };

  const { name, email, password } = fields;
  return (
    <>
      <div className="sign-up-container">
        <h2>Signup</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            error={errors.name}
            label="Name"
          />
          <FormInput
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            error={errors.email}
            label="Email Address"
          />

          <FormInput
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            error={errors.password}
            label="Password"
          />
          <div className="redirect-to-login">
            Already have an account? <Link to="/login">Login</Link>
          </div>
          <Button fullWidth type="submit">
            Signup
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
