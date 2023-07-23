const toTitleCase = (str) => {
  str = str.replace(/_/g, " ");
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const validate = (values, skipPassword) => {
  const errors = {};
  // Required Validation
  for (let field in values) {
    // Description shouldn't be validated
    if (field === "description") continue;
    if (!values[field]) {
      errors[field] = `${toTitleCase(field)} is required`;
    }
  }

  // Password Validation
  if (!skipPassword && values.password) {
    const passwordError = validatePassword(values.password);
    if (passwordError) {
      errors.password = passwordError;
    }
  }

  // Card Number Validation
  if (values.cardNumber) {
    const cardNumberError = validatCardNumber(values.cardNumber);
    if (cardNumberError) {
      errors.cardNumber = cardNumberError;
    }
  }

  // Card CVC Validation
  if (values.cardCvc) {
    const cardCvcError = validateCardCvc(values.cardCvc);
    if (cardCvcError) {
      errors.cardCvc = cardCvcError;
    }
  }

  return errors;
};

const validatePassword = (password) => {
  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }
  return null;
};

const validatCardNumber = (cardNumber) => {
  if (cardNumber.length < 16) {
    return "Card number must be at least 16 characters";
  }
  return null;
};

const validateCardCvc = (cardCvc) => {
  if (cardCvc.length < 3) {
    return "Card CVC must be at least 3 characters";
  } else if (cardCvc.length > 3) {
    return "Card CVC must be at most 3 characters";
  }
  return null;
};

export const findMaxId = (list) => {
  let maxId = -1;
  list.forEach((item) => {
    if (item.id > maxId) {
      maxId = item.id;
    }
  });
  return maxId;
};

export const getUserByEmail = (email, users) => {
  const user = users.find((user) => user.email === email);
  return user;
};
