import React, { useEffect, useState } from "react";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import Card from "../componants/Card";
import Curousel from "../componants/Curousel";
import axios from "axios";

export const Home = () => {
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
        <Curousel />
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
					foodData !==[] ? foodData.filter((item)=>item.CategoryName === data.CategoryName).map((fData)=>{
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
