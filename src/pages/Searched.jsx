import React from 'react'
import{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Grid, CuisineCard} from '../styles/Style';
import { Link } from 'react-router-dom';
function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
 
    const getSearched = async(name)=> {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
      
      const recipes = await data.json()
      setSearchedRecipes(recipes.results);
      };
      useEffect(() =>{
      getSearched(params.search);
      },[params.search]);

  return <Grid> 
    {searchedRecipes?.map((item) => {
return (
    <CuisineCard key={item.id}>
        <Link to={"/recipe/" + item.id}>
<img src={item.image} alt=""/>
<h4> {item.title}</h4>
</Link>
    </CuisineCard>
    
)
    })}
  </Grid>
}

export default Searched;