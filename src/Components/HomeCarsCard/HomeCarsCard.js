import React from "react";
import "./HomeCarsCard.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeCarsCard = (props) => {
  const { _id ,title, price, description, img } =
  props.allCar || {};
  const url = `/product-details/${_id}`
  return (
    <div className="col">
      <div className="card h-80 p-2 m-3 text-start">
        <img src={img} height="250px" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title fw-normal">
            <span className="fw-bold">Car Name:</span> <br /> {title}
          </h5>
          <h6 className="card-text fw-normal">
            <span className="fw-bold">Car Price:</span> {price}
          </h6>
          <h6 className="card-text fw-normal">
            <span className="fw-bold">Car Description:</span> {description}
          </h6>
          <Link to={url}>
          <Button variant="secondary">Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCarsCard;
