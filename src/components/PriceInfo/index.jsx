import React from "react";
import "./index.css";
import { Link} from "react-router-dom";

const PriceInfo = (props) => {
  
return (
    <>
       <div className="price-info-container">
          <div>
            <h2>Total price</h2>
            <p>1 x {props.price},-</p>
            <p>Tax {props.price} - 20%</p>
          </div>
        
          <Link to={"/confirmation"}>
          <button className="payment-btn" onClick={props.OnClick}>Proceed to payment </button>
          </Link>
        </div>
    </>
  );
};
export default PriceInfo;