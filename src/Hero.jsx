import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            molestias nobis? Earum dolorum iusto ut neque culpa corrupti,
            inventore cum dolor accusamus facilis? Cum, nisi commodi atque
            quidem porro vel aperiam culpa dolorum dignissimos aut suscipit
            ipsum impedit maiores temporibus modi repellendus quasi, quisquam
            perferendis labore saepe? Corporis, nihil eius.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
