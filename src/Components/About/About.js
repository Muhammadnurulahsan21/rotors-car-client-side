import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faCar,
  faGem,
  faHeadset,
  faShieldAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="custom-margin">
      <div className="about-bg-img d-flex justify-content-between">
        <div className="pt-5 ps-5 text-light">
          <h1 className="pt-3 ps-5 ">Learn at Our Company</h1>
          <h4 className="pt-1 ps-5 ">Home / About</h4>
        </div>
        <div className="bg-secondary second-div">
          <h1 className="pt-4 ps-5 text-start mt-3 text-white">Why CarShop?</h1>
          <h3 className="text-white text-start ps-5 fw-light">
            Our no-haggle pricing is just the beginning of a no-hassle
            experience.
            <br />
            We treat people the way we’d want to
            <br />
            be treated, so you get the best car.
          </h3>
        </div>
      </div>
      <div className="container pt-5 mb-5 text-center">
        <div className="rotors-text">
          <h1>Why Choose Rotors Cars Company?</h1>
        </div>
        <h5 className="text-info fw-normal mt-5">
          The rotors' primary purpose is to slow down the turning of the car's
          wheels by utilizing friction. <br /> The brake rotor process occurs
          when calipers squeeze your car's brake pads together.
        </h5>
        <h5 className=" fw-light">
          Brake rotors are used alongside other braking components to slow and
          stop your vehicle.
          <br /> Without brake rotors, your vehicle would not be able to stop
          safely or slow down after <br />
          acceleration, aside from gradual slowing due to friction with the air
          and the road itself.
        </h5>

        <div className="d-flex pt-5 text-center d-flex justify-content-center align-items-center">
          <div className="pe-5 me-2">
            <div className="pb-3">
              <FontAwesomeIcon
                className="text-danger "
                icon={faShieldAlt}
                size="3x"
              />
            </div>
            <h2>
              Secure Payment
              <br /> Guarantee
            </h2>
            <h5 className="fw-normal">
              A payment guarantee provides the <br />
              beneficiary with financial security <br />
              should the applicant fail to make.
            </h5>
          </div>
          <div className="ps-5 pe-5 me-5">
            <div className="pb-3">
              <FontAwesomeIcon
                className="text-danger "
                icon={faHeadset}
                size="3x"
              />
            </div>
            <h2>
              Help Center &<br /> Support 24/7
            </h2>
            <h5 className="fw-normal ">
              24/7 customer support means when <br /> are able to engage their
              customers <br /> whenever they need by deploying to digital.
            </h5>
          </div>
          <div className="">
            <div className="pb-3">
              <FontAwesomeIcon
                className="text-danger "
                icon={faCar}
                size="3x"
              />
            </div>
            <h2>
              Booking any <br />
              Class Vehicles
            </h2>
            <h5 className="fw-normal">
              Vehicles are booked using Vehicle <br />
              Create Reservations Req. A vehicle
              <br /> segment can be booked only if it is.
            </h5>
          </div>
        </div>

        <div className="d-flex pt-5 text-center pb-5 mb-5 d-flex justify-content-center align-items-center">
          <div className="pe-5">
            <div className="pb-3">
              <FontAwesomeIcon
                className="text-danger "
                icon={faBriefcase}
                size="3x"
              />
            </div>
            <h2>
              Corporate and <br />
              Business Services
            </h2>
            <h5 className=" fw-normal">
              We’ll get your company registered,
              <br /> set up the reporting, and open a bank <br />
              online. Only for $1,924 All Fees Included.
            </h5>
          </div>
          <div className="ps-5 pe-5">
            <div className="pb-3">
              <FontAwesomeIcon
                className="text-danger "
                icon={faUserTie}
                size="3x"
              />
            </div>

            <h2>
              Car Sharing <br />
              Options
            </h2>
            <h5 className=" fw-normal">
              There are two main types of ride-hailing <br />
              companies: peer-to-peer and professional. <br /> Peer-to-peer
              ride-hailing services.
            </h5>
          </div>
          <div className="ps-5">
            <div className="pb-3">
              <FontAwesomeIcon
                className="text-danger "
                icon={faGem}
                size="3x"
              />
            </div>
            <h2 className="">
              Limousine and
              <br /> Chauffeur Hire
            </h2>
            <h5 className=" fw-normal">
              Rotors Cars Sate in Bangladesh Dhaka.
              <br /> Airport Limo Services, VIP Limousine
              <br /> Business Transportation for Fast-Track.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
