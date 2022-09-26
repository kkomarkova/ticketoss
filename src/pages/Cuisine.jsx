import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import{motion} from 'framer-motion';
import {Link, useParams} from "react-router-dom";
import { CuisineCard, Grid } from '../styles/Style';

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  
  const getCuisine = async(name)=> {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=&{name}`)
  
  const recipes = await data.json()
  setCuisine(recipes.results);
  };

//Everytime the page is refreshed give a saved type
  useEffect(() =>{
  getCuisine(params.type);
  },[params.type]);
  
  return <Grid>
    {cuisine.map((item) =>{
      return(
<CuisineCard key={item.id}>
  <img src={item.image} alt=""/>
  <h4>{item.title}</h4>
</CuisineCard>
      );
    })}
  </Grid>;
  
}

export default Cuisine