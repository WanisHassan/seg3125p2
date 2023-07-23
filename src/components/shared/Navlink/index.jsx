import React from "react";

import "./index.css";

import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { LANGUAGE_MAP } from "../../../constants";
import { useUserContext } from "../../../context/user/user.provider";

const Navlink = ({ text, link, ...rest }) => {
  const { dropdown } = rest;
  const { language } = useUserContext();
  return (
    <div className="relative my-auto nav-container">
      <Link className="nav-link" to={link}>
        {LANGUAGE_MAP[language][text]}
      </Link>
      {dropdown && (
        <div className={`dropdown`}>
          {dropdown?.map(({ text, link }) => (
            <Link className="dropdown-item" to={link}>
              <span>
                {LANGUAGE_MAP[language][text]
                  ? LANGUAGE_MAP[language][text]
                  : text}
              </span>
              <AiOutlineArrowRight />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navlink;
