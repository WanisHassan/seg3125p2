import React from "react";

// Icons
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import "./index.css";
import Button from "../shared/Button";

const Carousal = ({ items }) => {
  const [currentItem, setCurrentItem] = React.useState(0);

  const handleClick = (iterator) => {
    switch (iterator) {
      case "left":
        setCurrentItem(currentItem > 0 ? currentItem - 1 : items.length - 1);
        break;
      case "right":
        setCurrentItem(currentItem < items.length - 1 ? currentItem + 1 : 0);
        break;
      default:
        setCurrentItem(iterator);
        break;
    }
  };

  return (
    <div className="carousal-wrapper">
      <div className="carousal relative">
        <AiOutlineArrowLeft
          className="arrow left"
          size={30}
          onClick={() => handleClick("left")}
        />
        <div className="carousal-item">
          {items[currentItem]}
        </div>
        <AiOutlineArrowRight
          className="arrow right"
          size={30}
          onClick={() => handleClick("right")}
        />
        <div className="dots-container">
          {items.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentItem ? "active" : ""}`}
              onClick={() => handleClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousal;
