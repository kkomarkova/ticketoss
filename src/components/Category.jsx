import{FaPizzaSlice, FaHamburger } from "react-icons/fa";
import{GiNoodles, GiChopsticks} from "react-icons/gi";
import React from 'react'
import {List, SLink} from "../styles/Style";


function Category() {
  return (
    <List>
<SLink to={'/cuisine/Italian'}>
    <FaPizzaSlice/>
    <h4>Italian</h4>
</SLink>
<SLink to={'/cuisine/American'}>
    <FaHamburger/>
    <h4>American</h4>
</SLink>
<SLink to={'/cuisine/Thai'}>
    <GiNoodles/>
    <h4>Thai</h4>
</SLink>
<SLink to={'/cuisine/Spanish'}
>
    <GiChopsticks/>
    <h4>Japanese</h4>
</SLink>
    </List>
  )
}

export default Category