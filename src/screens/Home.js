// Home.jsx

import React, { useEffect, useState } from "react";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import Card from "../componants/Card";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import axios from "axios";
import "./Home.css";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);

  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/getdata");
      setFoodData(response.data[0]);
      setFoodCategory(response.data[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log("Alert message changed:", alertMessage);
  }, [alertMessage]);

  return (
    <div className="full-width-container">
      <Navbar />

      {alertMessage && (
        <div className="alert alert-success text-center alert-custom" role="alert">
          {alertMessage}
        </div>
      )}

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="carousel-item active">
            <img src={food1} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={food2} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={food3} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container mt-3">
        {foodCategory.length > 0 ? (
          foodCategory.map((data) => (
            <div key={data._id}>
              <div className="fs-3 m-3">{data.CategoryName}</div>
              <hr />
              <div className="food-row">
                {foodData.length > 0 ? (
                  foodData
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((fData) => (
                      <div key={fData._id} className="food-card-wrapper">
                        <Card
                          foodItem={fData}
                          options={fData.options}
                          desc={fData.description}
                          setAlertMessage={setAlertMessage}
                        />
                      </div>
                    ))
                ) : (
                  <div>No such data found</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>

      <Footer />
    </div>
  );
};