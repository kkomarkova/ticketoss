import {Wrapper, Gradient, Card}from "../styles/Style";
import { useEffect, useState } from "react";
import styled from "styled-components";
import{Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
function Popular() {

//Slide- Carousel, SplideSlide(each component)
//State - variable that save the data and keep it 
const [popular,setPopular] = useState([]);

//Running getPopular as soon as it is rendered
useEffect(() =>{
getPopular();
},[]);



const getPopular = async()=>{
    //Save the file in local storage
    const check = localStorage.getItem('popular');
    if(check)
    {
        setPopular(JSON.parse(check));
    }
    else{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await api.json()
    //Set the local storage here
    localStorage.setItem('popular', JSON.stringify(data.recipes));
    setPopular(data.recipes);
    console.log(data.recipes);
    }
    
    
}
//Mapping through the recipes and outputing something
return (
    <div>
    <Wrapper>
<h3>Popular Picks</h3>
<Splide options={{
    perPage: 4,
    arrows: false,
    pagination: false,
    drag: "free",
    gap: "5rem",
}}>

{popular.map((recipe)=>{
    return(
<SplideSlide key={recipe.id}>
<Card>
    <p>{recipe.title}</p>
    <img src={recipe.image} alt={recipe.title}/>
<Gradient/>
</Card>
</SplideSlide>
    );
})}
</Splide>
    </Wrapper>
</div>
);
}

export default Popular