import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpg";
import img5 from "../assests/img5.jpeg";

const Home = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="item1" />
          <p className="legend">Evening</p>
        </div>
        <div>
          <img src={img2} alt="item1" />
          <p className="legend">Greenary</p>
        </div>
        <div>
          <img src={img5} alt="item1" />
          <p className="legend">Ehirium</p>
        </div>
        <div>
          <img src={img3} alt="item1" />
          <p className="legend">Bitcoin</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
