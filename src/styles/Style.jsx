import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


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

export const Grid = styled(motion.div)`
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
margin: 0rem auto;
position: relative;
width: 100%;
transform: scale(0.8);

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
export const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;
.active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
}
h2{
    margin-bottom: 2rem;
}
li{
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul{
    margin-top: 2rem;
}
`;

export const Button = styled.div`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right:2rem;
font-weight 600;
`;

export const Info = styled.div`
margin-left: 10rem;
`
export const Nav = styled.nav`
background:#000;
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
font-size: 1rem;
position: sticky;
top:0;
z-index:10;

@media screen and (max-width:960px)
{
    transition: 0.8s all ease;
}`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80 px;
z-index: 1;
width:100%;
padding: 0 24px;
max-width: 1100px;
`
//LinkR for react router
export const NavLogo = styled(LinkR)`
color:#fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`

export const MobileIcon = styled.div`
//display only for mobile use
display:none;
@media screen and (max-width:768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%. 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff;
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align:center;
margin-right: --22px;

@media screen and (max-width:768px)
{
    display:none;
}
`
export const NavItem = styled.li`
height: 80px;
`
//Links from scroll
export const NavLinks = styled(LinkS)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height: 100;
cursor: pointer;

//This represent the active state
&.active{
    border-bottom: 3px solid #01bf71
}
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width:768px)
{
    display:none;
}
`
export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background:#01bf71;
white-space:nowrap;
padding:10 px 22px;
color:#010606;
font-size: 16px;
outline:none;
border:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
}
`

