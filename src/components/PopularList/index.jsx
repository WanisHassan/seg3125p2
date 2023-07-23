import React from "react";
import {
  SiAdidas,
  SiJordan,
  SiNike,
  SiNewbalance,
  SiPuma,
} from "react-icons/si";
import { GiConverseShoe } from "react-icons/gi";

import "./index.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LANGUAGE_MAP } from "../../constants";
import { useUserContext } from "../../context/user/user.provider";

const PopularList = () => {
  const { language } = useUserContext();
  const popularBrands = [
    {
      id: 1,
      name: "Nike",
      logo: <SiNike className="brand-logo" size={100} />,
      link: "/sneakers/nike",
    },
    {
      id: 2,
      name: "Adidas",
      logo: <SiAdidas className="brand-logo" size={100} />,
      link: "/sneakers/adidas",
    },
    {
      id: 3,
      name: "Jordan",
      logo: <SiJordan className="brand-logo" size={100} />,
      link: "/sneakers/air-jordan",
    },
    {
      id: 4,
      name: "Converse",
      logo: <GiConverseShoe className="brand-logo" size={100} />,
      link: "/sneakers/converse",
    },
    {
      id: 5,
      name: "New Balance",
      logo: <SiNewbalance className="brand-logo" size={100} />,
      link: "/sneakers/new-balance",
    },
    {
      id: 6,
      name: "Puma",
      logo: <SiPuma className="brand-logo" size={100} />,
      link: "/sneakers/puma",
    },
  ];

  const [lowerBound, setLowerBound] = React.useState(0);
  const [upperBound, setUpperBound] = React.useState(4);
  const [currentVisible, setCurrentVisible] = React.useState(
    popularBrands.slice(lowerBound, upperBound)
  );

  const handleClick = (iterator) => {
    switch (iterator) {
      case "left":
        setLowerBound(lowerBound - 1);
        setUpperBound(upperBound - 1);
        setCurrentVisible(popularBrands.slice(lowerBound - 1, upperBound - 1));
        break;
      case "right":
        setLowerBound(lowerBound + 1);
        setUpperBound(upperBound + 1);
        setCurrentVisible(popularBrands.slice(lowerBound + 1, upperBound + 1));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>{LANGUAGE_MAP[language]["Popular Brands"]}</h2>
      <div className="brands-carousal-wrapper">
        <div className="brands-carousal relative">
          <AiOutlineArrowLeft
            className={`arrow left ${lowerBound === 0 ? "disabled" : ""}`}
            size={30}
            onClick={() => lowerBound != 0 && handleClick("left")}
            disabled={currentVisible === 0}
          />
          <div className="brands-list-wrapper">
            {currentVisible.map((brand, index) => (
              <div className="brand-wrapper" key={index}>
                <Link to={brand.link} className="brand">
                  {brand.logo}
                </Link>
              </div>
            ))}
          </div>
          <AiOutlineArrowRight
            className={`arrow right ${
              upperBound === popularBrands.length ? "disabled" : ""
            }`}
            size={30}
            onClick={() =>
              upperBound != popularBrands.length && handleClick("right")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PopularList;
