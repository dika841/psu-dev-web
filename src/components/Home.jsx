import React from "react";
import background from "../assets/BG.png";
const Home = ({ children }) => {
  return (
    <section
      className="h-screen w-full bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {children}
      <section className=""></section>
    </section>
  );
};

export default Home;
