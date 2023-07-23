import React, { createContext, useState, useContext } from "react";
import { USERS } from "../../constants";
import { findMaxId, getUserByEmail } from "../../utils/utils";

const INITIAL_STATE = {
  registered_users: USERS, // Registered Users
  user: null, // Logged in user
  language: "en",
};
const UserContext = createContext(INITIAL_STATE);

const UserProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(USERS);
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState("en");

  const loginUser = ({ email, password }) => {
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setUser(user);
      return { msg: "Login Successful", status: 1 };
    }
    return { msg: "Invalid Credentials", status: 0 };
  };

  const registerUser = ({ name, email, password }) => {
    const user = getUserByEmail(email, registeredUsers);
    if (user) {
      return { msg: "User already exists", status: 0 };
    }

    const id = findMaxId(registeredUsers) + 1;
    setRegisteredUsers([...registeredUsers, { name, email, password, id }]);
    return { msg: "Registration Successful", status: 1 };
  };

  const postMessage = (message, id) => {
    const user = registeredUsers.find((user) => user.id === id);
    if (user.messages) {
      user.messages.push(message);
    } else {
      user.messages = [message];
    }
    setRegisteredUsers([
      ...registeredUsers.filter((user) => user.id !== id),
      user,
    ]);
    return { msg: "Message Sent Successfully", status: 1 };
  };

  const logoutUser = () => {
    setUser(null);
  };

  const value = {
    user,
    registeredUsers,
    loginUser,
    registerUser,
    logoutUser,
    postMessage,
    language,
    setLanguage,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
