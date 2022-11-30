import React from "react";
import "./index.css";
import { Link} from "react-router-dom";

const PriceInfo = (props) => {
  
return (
    <>
       <div className="price-info-container">
          <div>
            <h2>{props.price}Total price</h2>
            <p>1 x 299,-</p>
            <p>Tax 25</p>
          </div>
        
          <Link to={"/confirmation"}>
          <button className="payment-btn">Proceed to payment </button>
          </Link>
        </div>
    </>
  );
};
export default PriceInfo;