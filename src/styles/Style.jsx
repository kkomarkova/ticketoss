import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
margin: 4rem 0rem;
`;
export const Card = styled.div`
min-height: 15rem;
border-radius: 2rem;
overflow: hidden;
position: relative;



img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
p{
    position:absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

}
`;

export const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`;

export const CuisineCard = styled.div`
img{
    width: 100%;
    border-radius: 2rem;
}
a{
    text-decoration: none;
}
h4{
    text-align: center;
    padding: 1rem;
}
`;
export const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);

h4{
    color: white;
    font-size: 0.8rem;
}
svg{
    color: white;
    font-size: 1.5rem;
}
`;
export const FormStyle = styled.form`
margin: 0rem 20rem;
position: relative;
width: 100%;
input{
    border:none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
}
div{
    width: 100%;
    position: relative;
}
svg{
    position: absolute;
    top:50%;
    left:0%;
    transform: translate(100%, -50%);
    color:white;
}
`




