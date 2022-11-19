import React from "react";
//import Home from "../components/Home";
import bgImg from "../images/bgIMG.jpg";
import "../pages/pages.css";
import Pagination from "../components/Pagination";
import FilterCategory from "../components/FilterCategory";


const HomePage = () => {
  return (
  <>
    <div className="home-body">
      <img className="home-background-img" src={bgImg} alt="Background"/>
      <h1 >Browse all tickets</h1>
      <div className="filter-category">
      <FilterCategory />
      </div>
      <div className="home-ticket">
          <Pagination />
      </div>
    </div>
    </>
  );
}

export default HomePage;
