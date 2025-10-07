import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import the Bootstrap CSS

const CarouselExample = () => {
  return (
    <div className="container">
      <h2>Carousel Example</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="la.jpg"
            alt="Los Angeles"
          />
          <Carousel.Caption>
            <h3>Los Angeles</h3>
            <p>LA is always so much fun!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="chicago.jpg"
            alt="Chicago"
          />
          <Carousel.Caption>
            <h3>Chicago</h3>
            <p>Thank you, Chicago!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="ny.jpg"
            alt="New York"
          />
          <Carousel.Caption>
            <h3>New York</h3>
            <p>We love the Big Apple!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselExample;
