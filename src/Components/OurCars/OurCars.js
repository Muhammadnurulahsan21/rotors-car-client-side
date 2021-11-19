import React, { useEffect, useState } from "react";
import "./OurCars.css";
import OurCarsCard from "./../OurCarsCard/OurCarsCard";

const OurCars = () => {
  const [allCars, setAllCars] = useState([]);
  useEffect(() => {
    fetch("https://fierce-brushlands-69316.herokuapp.com/carDatabase")
      .then((res) => res.json())
      .then((data) => setAllCars(data.carDatabase));
  }, []);
  return (
    <div className="custom-margin">
      <div className="pb-5">
        <div className="car-img text-center text-light">
          <h2 className=" car-text">Our Cars</h2>
          <div className="pt-4">
            <h5 className="mt-5 pt-5">Home / Our Cars</h5>
          </div>
        </div>
      </div>

      <div className="pb-5">
        <h2 className="text-center text-danger featured-text">
          Featured Vehicles
        </h2>
      </div>

      <div className="container mb-5 mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {allCars.map((allCar) => (
            <OurCarsCard key={allCar.id} allCar={allCar}></OurCarsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCars;
