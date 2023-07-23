import "./index.css";
import Carousal from "../../components/Carousal";
import PopularList from "../../components/PopularList";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";
import { useUserContext } from "../../context/user/user.provider";
import { LANGUAGE_MAP } from "../../constants";

function App() {
  const { language } = useUserContext();
  const carousalImages = [
    <>
      <Link to={`/sneakers/detail/21`} className="carousal-image">
        <img
          src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/877d30e7-4880-46f8-aa71-6704eb7d944d/air-max-plus-mens-shoes-x9G2xF.png"
          alt="carousal-img"
        />
      </Link>
      <div className="carousal-shop-now">
        <Button>
          <Link to={`/sneakers/more-brands`}>
            {LANGUAGE_MAP[language]["Shop Now"]}
          </Link>
        </Button>
      </div>
    </>,
    <>
      <Link to={`/sneakers/detail/22`} className="carousal-image">
        <img
          src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa32a21a-2a41-4ea4-bf4d-41fca9886c02/freak-5-basketball-shoes-jZzrx4.png"
          alt="carousal-img"
        />
      </Link>
      <div className="carousal-shop-now">
        <Button>
          <Link to={`/sneakers/more-brands`}>
            {LANGUAGE_MAP[language]["Shop Now"]}
          </Link>
        </Button>
      </div>
    </>,
    <>
      <Link to={`/sneakers/detail/23`} className="carousal-image">
        <img
          src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f042b05ad1bf4d51b7dfaf1600054038_9366/Ultraboost_1.0_Shoes_White_HQ4202_01_standard.jpg"
          alt="carousal-img"
        />
      </Link>
      <div className="carousal-shop-now">
        <Button>
          <Link to={`/sneakers/more-brands`}>
            {LANGUAGE_MAP[language]["Shop Now"]}
          </Link>
        </Button>
      </div>
    </>,
  ];
  return (
    <>
      <div className="container">
        <Carousal items={carousalImages} />
        <PopularList />
      </div>
      <Footer />
    </>
  );
}

export default App;
