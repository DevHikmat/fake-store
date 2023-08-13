import React from "react";
import { useInfoContext } from "../../context/InfoContext";
import Carousel from "../../components/carousel/Carousel";

const Home = () => {
  const { categories } = useInfoContext();

  return (
    <div className="home">
      {categories?.map((cat, index) => {
        return (
          <div key={index}>
            <h2 className="h5 text-uppercase">{cat}</h2>
            <Carousel cat={cat} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
