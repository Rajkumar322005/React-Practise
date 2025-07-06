import React from "react";
import "./Header.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our food cart application! We are passionate about bringing
        delicious food to your doorstep.
      </p>
      <p>
        Our mission is to provide a seamless and enjoyable food ordering
        experience.
      </p>
      <p>Thank you for choosing us!</p>
      <p>
        Contact us at:
        <a href="mailto:support@Zepisodes.com"> support@Tvshow.com</a>
      </p>
      <p>Follow us on social media:</p>
      <ul>
        <li>
          <a href="https://www.facebook.com/foodcart">Facebook</a>
        </li>
        <li>
          <a href="https://www.twitter.com/foodcart">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/foodcart">Instagram</a>
        </li>
      </ul>
    </div>
  );
};

export default About;
