import React from "react";
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

function SignIn() {
  return (
    <>
      <SignInContainer>
        <FormWrap>
          <SignInIcon to="/"> Czech Cuisine</SignInIcon>
          <FormContent>
            <SignInForm action="#">
              <FormH1> Sign in to your account</FormH1>
              <FormLabel htmlFor="for"> Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </SignInForm>
          </FormContent>
        </FormWrap>
      </SignInContainer>
    </>
  );
}

export default SignIn;
