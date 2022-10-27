import React, { useState } from "react";
import axios from "axios";
import {
    FormContent,
    FormInput,
    FormWrap,
    SignInContainer,
    FormLabel,
    FormButton,
    Text,
    SignInForm,
  } from "../../styles/Style";
 import { useNavigate } from "react-router-dom";

 const Register = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    //const [Data, setData] = useState("");

    const navigate = useNavigate();
        
    const handleSave = async () => {
        const data = {
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Password: Password,
            PhoneNumber: PhoneNumber,
        };
        const endpoint = "https://localhost:7067/api/User/register";
        await axios.post(endpoint, data).then((result) => {
                if (result.status === 200) 
                    alert("Successfully Registered");
                    console.log(result);
                    navigate(`https://localhost:7067/api/User/${data.id}`);
                 
                
            })
            .catch((error) => {
               alert(error);
               console.log(error);
            }); 
        };
    
     return (
        <>
            <SignInContainer>
                <FormWrap>
                    <FormContent>
                        <SignInForm action="post">
                            <div className="form-group">
                                <FormLabel 
                                    htmlFor="FirstName">
                                        First Name
                                        </FormLabel>
                                <FormInput 
                                    type="text" 
                                    className="form-control" 
                                    id="FirstName" 
                                    placeholder="Enter First Name" 
                                    onChange={(event) => setFirstName(event.target.value)} 
                                    value={FirstName} 
                                />
                            </div>
                            <div className="form-group">
                                <FormLabel 
                                    htmlFor="LastName">
                                        Last Name
                                        </FormLabel>
                                <FormInput 
                                    type="text" 
                                    className="form-control" 
                                    id="LastName" 
                                    placeholder="Enter Last Name" 
                                    onChange={(event) => setLastName(event.target.value)} 
                                    value={LastName}
                                />
                            </div>
                            <div className="form-group">
                                <FormLabel 
                                    htmlFor="Email">
                                        Email
                                        </FormLabel>
                                <FormInput 
                                    type="email" 
                                    className="form-control" 
                                    id="Email" 
                                    placeholder="Enter Email" 
                                    onChange={(event) => setEmail(event.target.value)} 
                                    value={Email} 
                                />
                            </div>
                            <div className="form-group">
                                <FormLabel 
                                    htmlFor="Password">
                                        Password
                                        </FormLabel>
                                <FormInput 
                                    type="password" 
                                    className="form-control" 
                                    id="Password" 
                                    placeholder="Enter Password" 
                                    onChange={(event) => setPassword(event.target.value)} 
                                    value={Password} 
                                />
                            </div>
                            <div className="form-group">
                                <FormLabel 
                                    htmlFor="PhoneNumber">
                                        Phone Number
                                        </FormLabel>
                                <FormInput 
                                    type="text" 
                                    className="form-control" 
                                    id="PhoneNumber" 
                                    placeholder="Enter Phone Number" 
                                    onChange={(event) => setPhoneNumber(event.target.value)} 
                                    value={PhoneNumber} 
                                />
                            </div>
                            <FormButton 
                                type="submit" 
                                className="btn btn-primary" 
                                onClick={()=> handleSave()}
                            >
                             Submit   
                            </FormButton> 
                            <Text>Login</Text>  
                        </SignInForm>
                    </FormContent>
                </FormWrap>
            </SignInContainer>
        </>
    )}

export default Register;