import React from "react";

import "./index.css";
import Navlink from "../shared/Navlink";
import Button from "../shared/Button";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user/user.provider";
import { LANGUAGE_MAP } from "../../constants";

const Header = () => {
  const { user, logoutUser, language, setLanguage } = useUserContext();
  const NAV_LINKS = [
    {
      text: "Browse",
      link: "/sneakers/more-brands",
      dropdown: [
        {
          text: "Air Jordan",
          link: "/sneakers/air-jordan",
        },
        {
          text: "Nike",
          link: "/sneakers/nike",
        },
        {
          text: "Adidas",
          link: "/sneakers/adidas",
        },
        {
          text: "More Brands",
          link: "/sneakers/more-brands",
        },
        {
          text: "New Releases",
          link: "/sneakers/new-releases",
        },
      ],
    },
    {
      text: "Sell",
      link: "/sell",
    },
    {
      text: "About Us",
      link: "about-us",
    },
    {
      text: "Cart",
      link: "/cart",
    },
  ];

  const [navLinks, setNavLinks] = React.useState(NAV_LINKS);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      const profileLink = navLinks.find(
        (link) => link.link === `/seller/${user.id}`
      );
      if (profileLink) {
        return;
      }
      setNavLinks([
        ...navLinks,
        {
          text: "Profile",
          link: `/seller/${user.id}`,
        },
      ]);
    } else {
      setNavLinks(NAV_LINKS);
    }
  }, [user, language]);

  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="logo">
          <Link to="/">KickConnect</Link>
        </div>
        <ul className="nav-links">
          {navLinks.map((navLink, idx) => (
            <Navlink key={idx} {...navLink} />
          ))}
          {user ? (
            <Button styles={"mx-2"} isInverted onClick={() => logoutUser()}>
              {LANGUAGE_MAP[language]["Logout"]}
            </Button>
          ) : (
            <>
              <Button onClick={() => navigate("/login")}>
                {LANGUAGE_MAP[language]["Login"]}
              </Button>
              <Button
                styles={"mx-2"}
                isInverted
                onClick={() => navigate("/signup")}
              >
                {LANGUAGE_MAP[language]["Signup"]}
              </Button>
            </>
          )}
          <div
            className="language-selector"
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
          >
            <span>{language}</span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
