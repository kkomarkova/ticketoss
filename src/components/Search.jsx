import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import{FormStyle} from "../styles/Style";
import {useNavigate} from 'react-router-dom';

function Search() {

//Getting the name of the search item
const [input, setInput] = useState("");
const navigate = useNavigate();

//By default when we search the browser is updated, submitHandler will help
const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
};

return (
    <FormStyle onSubmit={submitHandler}>
        <div>
        <FaSearch></FaSearch>
        <input onChange={(e)=> setInput(e.target.value)} 
        type="text" 
        value={input}
        />
        </div>
    </FormStyle>
    
  )
}



export default Search