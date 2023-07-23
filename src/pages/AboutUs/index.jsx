import React from "react";

import "./index.css";
import Footer from "../../components/Footer";
import { useUserContext } from "../../context/user/user.provider";
import { LANGUAGE_MAP } from "../../constants";

const AboutUs = () => {
  const { language } = useUserContext();
  return (
    <>
      <div className="about-us-wrapper">
        <h1>{LANGUAGE_MAP[language]["About Us"]}</h1>
        <div className="section bg-dark">
          <h2>How We Work</h2>
          <h4>Buy Sneakers:</h4>
          <p>
            Explore our extensive collection of curated sneaker listings. Find
            the perfect pair that matches your unique style.
          </p>
          <h4>Sell Sneakers:</h4>
          <p>
            Create your own listings and connect with potential buyers
            worldwide. Showcase your kicks to a vibrant community of
            sneakerheads.
          </p>
          <h4>Trust and Transparency:</h4>
          <p>
            Buy with confidence. Sellers are rated and reviewed by our
            community, ensuring a secure and reliable experience.
          </p>
          <h4>User Reviews:</h4>
          <p>
            Your feedback matters. Leave honest reviews to help the community
            grow and improve.
          </p>
          <h5>Join KickConnect today and kickstart your sneaker revolution!</h5>
        </div>
        <div className="section">
          <h2>Buying Guide</h2>
          <p>
            Ready to step into the world of sneaker shopping on KickConnect?
            Follow these simple steps to secure your dream pair of kicks.
          </p>
          <ol>
            <li>
              Browse Sneakers: Explore the wide selection on the landing page or
              click "Browse" in the nav bar.
            </li>
            <li>
              Choose and Checkout: Pick your favorite sneakers, then click "Buy
              Now" or "Add to Cart."
            </li>
            <li>
              Provide Details: Enter billing and shipping info during checkout.
            </li>
            <li>
              Order Summary: Review your order before completing the
              transaction.
            </li>
          </ol>
          <p>
            Congratulations! You've successfully secured your coveted pair of
            sneakers through KickConnect. Now, prepare to rock your new kicks
            and continue exploring the world of footwear with us!
          </p>
        </div>
        <div className="section bg-dark">
          <h2>Selling Guide</h2>
          <p>
            Posting a sneaker listing on KickConnect is a breeze. Follow our
            simple roadmap below to showcase your kicks to the vibrant sneaker
            community.
          </p>
          <ol>
            <li>
              Log in or Sign up: Access your KickConnect account or sign up if
              you're new.
            </li>
            <li>Click "Sell": Navigate to the "Sell" link in the nav bar.</li>
            <li>
              Enter Details: Provide shoe name, size, price, color, condition,
              brand, and an image.
            </li>
            <li>Review: Double-check the information for accuracy.</li>
            <li>Submit: Click "Submit" to post your listing.</li>
            <li>
              Manage Listings: View and manage your listings through your
              profile.
            </li>
          </ol>
          <p>
            Share your love for sneakers with the KickConnect community today.
            Post your listing, connect with fellow sneakerheads, and make your
            mark in the world of footwear!
          </p>
        </div>
        <div className="section">
          <h2>KickConnect</h2>
          <p>
            Welcome to KickConnect - the ultimate destination for sneaker
            enthusiasts! Immerse yourself in a curated collection of exclusive
            kicks from top brands worldwide. Join our vibrant community of
            sneakerheads, where passion and style collide. Experience
            hassle-free buying and selling, and stay ahead of the game with the
            latest releases. Kickstart your sneaker revolution with KickConnect
            today!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
