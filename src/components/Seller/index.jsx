import React from "react";
import "./index.css";

const Seller = (props) => {
  
  
  return (
    <>
       <div className="seller-container">
        
          <div className="seller-profile">
            <div>
            <img src={""} title="#" alt="pb"/></div>
            <h2>{props.sellerName}</h2>
          </div>

          <div className="star-rating">
            <input type="radio" name="stars" id="star-a" value="5"/>
            <label for="star-a"></label>

            <input type="radio" name="stars" id="star-b" value="4"/>
            <label for="star-b"></label>
        
            <input type="radio" name="stars" id="star-c" value="3"/>
            <label for="star-c"></label>
        
            <input type="radio" name="stars" id="star-d" value="2"/>
            <label for="star-d"></label>
        
            <input type="radio" name="stars" id="star-e" value="1"/>
            <label for="star-e"></label>
            </div>

        </div>
    </>
  );
};

export default Seller;

