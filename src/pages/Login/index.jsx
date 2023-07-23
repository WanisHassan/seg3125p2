import React, { useEffect, useState } from "react";
import FormInput from "../../components/shared/FormInput";

import "./index.css";
import Button from "../../components/shared/Button";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "../../utils/utils";
import { useUserContext } from "../../context/user/user.provider";
import Footer from "../../components/Footer";

const Login = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(fields, true);
    if (Object.keys(errors).length) {
      return setErrors(errors);
    }
    setErrors({});

    const { email, password } = fields;
    const { status, msg } = loginUser({ email, password });
    if (status) {
      setFields({
        email: "",
        password: "",
      });
      return navigate("/");
    }
    alert(msg);
  };

  const { loginUser, user } = useUserContext();

  const { email, password } = fields;

  useEffect(() => {
    user && navigate("/");
  }, [user]);

  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form className="form-container" onSubmit={handleSubmit}>
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
          <div className="redirect-to-signup">
            Don&apos;t have an account? <Link to="/signup">SignUp</Link>
          </div>
          <Button fullWidth type="submit">
            Login
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
