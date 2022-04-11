import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./Context";

const Hero = () => {
  const data = useGlobalContext();
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastruture for the internet</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            necessitatibus rerum, amet quo blanditiis, consectetur aspernatur
            quos illo ex eos eligendi officia impedit reiciendis consequatur,
            quia accusantium atque! Illo, soluta.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
