import React from "react";
import Pagination from "../Pagination";
import FilterCategory from "../FilterCategory";
import bgImg from "../../images/bgIMG.jpg";

const AllTickets = () => {
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
}
export default AllTickets;