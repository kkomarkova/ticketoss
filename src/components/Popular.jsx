import {
  Wrapper,
  Gradient,
  Card,
  InfoContainer,
  PopularWrapper,
  PopularContainer,
  TopLinePopular,
  PopularHeading,
  PopularTextWrapper,
  Subtitle,
  PopularLink,
} from "../styles/Style";

import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
  //Slide- Carousel, SplideSlide(each component)
  //State - variable that save the data and keep it
  const [popular, setPopular] = useState([]);

  //Running getPopular as soon as it is rendered
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    //Save the file in local storage
    const check = localStorage.getItem("popular");
    if (check == "popular") {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      //Set the local storage here
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };
  //Mapping through the recipes and outputing something
  return (
    <div>
      <PopularContainer>
        <PopularWrapper>
          <PopularTextWrapper>
            <TopLinePopular>TRENDING</TopLinePopular>
            <PopularHeading>Ready, steady, explore ?</PopularHeading>
            <Subtitle>These recipes are trending </Subtitle>
          </PopularTextWrapper>
          <Splide
            options={{
              perPage: 4,
              arrows: true,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            {popular?.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={`/recipe/${recipe.id}`}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
        </PopularWrapper>
      </PopularContainer>
    </div>
  );
}

export default Popular;
