import React from "react";

import "./index.css";
import FormInput from "../shared/FormInput";
import Button from "../shared/Button";
import { validate } from "../../utils/utils";
import { useProductsContext } from "../../context/products/products.provider";
import { useUserContext } from "../../context/user/user.provider";

const ReviewForm = ({ product }) => {
  const [review, setReview] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const { postReview } = useProductsContext();
  const { user } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate({ review });
    if (Object.keys(errors).length) {
      return setErrors(errors);
    }
    setErrors({});
    const { status, msg } = postReview(
      {
        text: review,
        user_name: user.name,
      },
      product.id
    );
    if (status) {
      setReview("");
    }
    alert(msg);
  };

  return (
    <div>
      <h1>Add a review</h1>
      <form className="review-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          onChange={(e) => setReview(e.target.value)}
          value={review}
          error={errors.review}
          label="Review"
        />
        <Button type="submit">Post Review</Button>
      </form>
    </div>
  );
};

export default ReviewForm;
