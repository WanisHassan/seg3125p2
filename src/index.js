import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sell from "./pages/Sell";
import RootProvider from "./context/root-provider";
import Sneakers from "./pages/Sneakers";
import SneakerDetails from "./pages/SneakerDetail";
import Shipping from "./pages/Shipping";
import Seller from "./pages/Seller";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Confirmation from "./pages/Confirmation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootProvider>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/sneakers/:slug" element={<Sneakers />} />
          <Route path="/sneakers/detail/:id" element={<SneakerDetails />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/seller/:id" element={<Seller />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <>
                <h1
                  style={{
                    textAlign: "center",
                  }}
                >
                  404! Page Doesn't Exists
                </h1>
                <Footer />
              </>
            }
          />
        </Routes>
      </RootProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
