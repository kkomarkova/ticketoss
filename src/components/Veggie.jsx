import {Wrapper, Gradient, Card}from "../styles/Style";
import { useEffect, useState } from "react";
import{Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Veggie() {
    const [veggie,setVeggie] = useState([]);

//Running getPopular as soon as it is rendered
useEffect(() =>{
getVeggie();
},[]);



const getVeggie = async()=>{
    //Save the file in local storage
    const check = localStorage.getItem('veggie');
    if(check)
    {
        setVeggie(JSON.parse(check));
    }
    else{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
    const data = await api.json()
    //Set the local storage here
    localStorage.setItem('veggie', JSON.stringify(data.recipes));
    setVeggie(data.recipes);
    console.log(data.recipes);
    }
    
    
}
  return (
    <div>
    <Wrapper>
<h3>Vegetarian picks</h3>
<Splide options={{
    perPage: 3,
    arrows: false,
    pagination: false,
    drag: "free",
    gap: "5rem",
}}>

{veggie.map((recipe)=>{
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
  )
}

export default Veggie