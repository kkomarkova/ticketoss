import React from "react";
import axios from "axios";
import {
  FormContent,
  FormH1,
  FormInput,
  FormWrap,
  SignInContainer,
  FormLabel,
  FormButton,
  Text,
  SignInIcon,
  SignInForm,
} from "../../styles/Style";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [user, setUser] = React.useState({ email: "", password: "" });
  const navigate = useNavigate();
  function signin(event) {
    axios
      .post(`https://localhost:7067/api/User/authenticate`, {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response?.status === 200) console.log(response);
        console.log("Successfully Logged in ");
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <SignInContainer>
        <FormWrap>
          <SignInIcon to="/"> Czech Cuisine</SignInIcon>
          <FormContent>
            <SignInForm action="#">
              <FormH1> Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                onChange={(event) =>
                  setUser({ ...user, email: event.target.value })
                }
                value={user.email}
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                onChange={(event) =>
                  setUser({ ...user, password: event.target.value })
                }
                value={user.password}
              />
              <FormButton type="submit" onClick={signin}>
                Continue
              </FormButton>
              <Text>Forgot password</Text>
            </SignInForm>
          </FormContent>
        </FormWrap>
      </SignInContainer>
    </>
  );
}

export default SignIn;
