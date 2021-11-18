import React from "react";
import "./NotFound.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import bgimg from "./../../img/bg-img.png";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  return (
    <>
      <Header></Header>
      <div className="custom-margin">
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <img height="500px" width="700px" src={bgimg} alt="" />
          </div>
          <div className="text-secondary pt-5 mt-5 custom-text">
            <h1 className="d-flex justify-content-center">
              OOPS...!!! We're broken
            </h1>
            <h5>Seems like you have assembled the page incorrectly.</h5>
            <div className="d-flex justify-content-center ">
              <button
                onClick={() => history.push("/home")}
                type="button"
                className="btn fs-5 btn-outline-secondary my-5 py-2 px-4"
              >
                Go back to our Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
