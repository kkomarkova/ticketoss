import styled from "styled-components";
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import{FormStyle} from "../styles/Style";

function Search() {

//Getting the name of the search item
const [input, setInput] = useState("");
  return (
    <FormStyle>
        <div>
        <FaSearch></FaSearch>
        <input onChange={(e)=> setInput(e.target.value)} type="text" value={input}/>
        </div>
    </FormStyle>
    
  )
}



export default Search