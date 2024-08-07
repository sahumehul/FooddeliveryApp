import React, { useEffect, useState } from "react";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import Card from "../componants/Card";
import food1 from "../images/food1.jpg"
import food2 from "../images/food2.jpg"
import food3 from "../images/food3.jpg"
import axios from "axios";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);

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
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
      <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{objectFit:"center !important"}}
        >
          <div className="carousel-inner" id="carousel">
          <div className="carousel-caption"  style={{zIndex:"10"}} >
          <div className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
    </div>
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
      <div className="m-3">
        {
		foodCategory !== [] ? (
          foodCategory.map((data) => {
            return (
              <div className="row mb-3">
                <div className="fs-3 m-3" key={data._id}>
                  {data.CategoryName}
                </div>
				<hr/>
				{
					foodData !==[] ? foodData.filter((item)=>(item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))).map((fData)=>{
						return (
							<div key={fData._id} className="col-12 col-ms-6 col-lg-3">
								<Card foodName={fData.name} options={fData.options} imgSrc={fData.img} desc={fData.description}/>
							</div>
						)
					}) : <div>
						No such data found
					</div>
				}
              </div>
            );
          })
        ) : (
          <div>No data found</div>
        )
		}

      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
