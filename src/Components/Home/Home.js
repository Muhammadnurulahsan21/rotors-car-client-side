import React from "react";
import { Carousel } from "react-bootstrap";

import pic1 from "./../../img/car01.jpg";
import pic3 from "./../../img/car03.jpg";
import pic4 from "./../../img/car04.jpg";
import pic6 from "./../../img/car06.jpg";
import pic7 from "./../../img/car07.jpg";

const Home = () => {
  return (
    <div className="custom-margin">
      <Carousel fade>
        <Carousel.Item>
          <img
            height="610px"
            className="d-block w-100"
            src={pic6}
            alt="Fourth slide"
          />

          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start text-dark">
            <div>
              <h1 className="fw-light">2015 Shevrolet</h1>
              <h1 className=" fw-normal">
                Corvette Stingray Z51
                <span className="fw-normal ms-4">
                  <span className="text-warning">SALE</span>
                  <span className="text-"> $2500.00</span>
                </span>
              </h1>
              <button
                type="button"
                className="btn btn-outline-light py-2 px-4 m-3 me-5 fs-5 text-dark"
              >
                Order Now
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="610px"
            className="d-block w-100"
            src={pic1}
            alt="First slide"
          />
          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start ">
            <div>
              <h1 className="fw-light">2020 Audi New</h1>
              <h1 className=" fw-normal">
                Generation P00234
                <span className="fw-normal ms-4">
                  <span className="text-warning">SALE</span>
                  <span className="text-danger"> $2900.00</span>
                </span>
              </h1>
              <button
                type="button"
                className="btn btn-outline-dark py-2 px-4 m-3 me-5 fs-5 text-warning"
              >
                Order Now
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="610px"
            className="d-block w-100"
            src={pic4}
            alt="Fourth slide"
          />

          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start text-light">
            <div>
              <h1 className="fw-light">2019 Shevrolet</h1>
              <h1 className=" fw-normal">
                Corvette Stingray Red
                <span className="fw-normal ms-4">
                  <span className="text-warning">SALE</span>
                  <span className="text-"> $3200.00</span>
                </span>
              </h1>
              <button
                type="button"
                className="btn btn-outline-light py-2 px-4 m-3 me-5 fs-5 text-dark"
              >
                Order Now
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="610px"
            className="d-block w-100"
            src={pic3}
            alt="Third slide"
          />

          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start ">
            <div>
              <h1 className="fw-light">2022 Audi New</h1>
              <h1 className=" fw-normal">
                Generation P00234
                <span className="fw-normal ms-4">
                  <span className="text-warning">SALE</span>
                  <span className="text-">$2700.00</span>
                </span>
              </h1>
              <button
                type="button"
                className="btn btn-outline-light py-2 px-4 m-3 me-5 fs-5 text-dark"
              >
                Order Now
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            height="610px"
            className="d-block w-100"
            src={pic7}
            alt="Fourth slide"
          />

          <Carousel.Caption className="mb-5 pb-5 pe-5 mb-5 fs-2 text-start text-dark">
            <div>
              <h1 className="fw-light">2016 Chevrolet</h1>
              <h1 className=" fw-normal">
                Tour Mini Bus New Model
                <span className="fw-normal ms-4">
                  <span className="text-warning">SALE</span>
                  <span className="text-dark"> $1700.00</span>
                </span>
              </h1>
              <button
                type="button"
                className="btn btn-outline-light py-2 px-4 m-3 me-5 fs-5 text-dark"
              >
                Order Now
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
