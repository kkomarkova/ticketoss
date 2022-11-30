import React from "react";
import Select from "react-select";
import "./index.css";


const FilterCategory = (props) => {
  
    const options = [
        { value: 'one', label: 'Category1' },
        { value: 'two', label: 'Category2' },
        { value: 'three', label: 'Category3' }
       ]
  
  return (
    <>
       <div class="dropdown">
           <Select options={options} placeholder={"Choose category"}/>
       </div>
    </>
  );
};

export default FilterCategory;