import React from "react";
import food1 from "../images/food1.jpg"
import food2 from "../images/food2.jpg"
import food3 from "../images/food3.jpg"

const Curousel = () => {
  return (
    <div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{objectFit:"center !important"}}
        >
          <div className="carousel-inner" id="carousel">
          <div className="carousel-caption"  style={{zIndex:"10"}} >
          <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
      </div>
            <div className="carousel-item active">
              <img src={food1} className="d-block w-100"  style={{filter:"brightness(30%)"}} alt="..." />
            </div>
            <div className="carousel-item">
              <img src={food2} className="d-block w-100" style={{filter:"brightness(30%)"}}  alt="..." />
            </div>
            <div className="carousel-item">
              <img src={food3} className="d-block w-100" style={{filter:"brightness(30%)"}}  alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Curousel;
