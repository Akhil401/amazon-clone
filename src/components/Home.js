import React from "react";
import "./home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        className="home__banner"
      />
      <div className="home__row">
        <Product
          id="148545"
          title="Pintola All Natural Peanut Butter (Crunchy) (2.5 kg) (Unsweetened, Non-GMO, Gluten Free, Vegan)"
          price={21.96}
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"
        />
        <Product
          id={12312}
          title="Learning React: Functional Web Development with React and Redux Paperback – 1"
          price={25.99}
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/I/51imLrht6lL._SX389_BO1,204,203,200_.jpg"
        />
      </div>
      <br />
      <br />
      <br />
      <div className="home__row">
        <Product
          id="132545"
          title="Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50"
          price={11.96}
          rating={5}
          img="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
        />
        <Product
          id="14545"
          title="Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50"
          price={11.96}
          rating={5}
          img="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
        />
        <Product
          id="1456"
          title="Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50"
          price={11.96}
          rating={5}
          img="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="156"
          title="GSM Fitness Hex Dumbbell, 7.5 kgs, Pack of 2, Rubber Coatedo"
          price={51.96}
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/I/417wp10uSeL.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
