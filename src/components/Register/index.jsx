import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../../store/actions/auth";

import { 
  FormContainer, 
  FormPB 
} from "../../styles/Style";
import ProfileImg from "../../images/pb.jpg";

const requiredField = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const validName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const validPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const validPhoneNumber = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { response } = useSelector(state => state.response);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onChangeFirstName = (e) => {
    const FirstName = e.target.value;
    setFirstName(FirstName);
  };

  const onChangeLastName = (e) => {
    const LastName = e.target.value;
    setLastName(LastName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangePhoneNumber = (e) => {
    const PhoneNumber = e.target.value;
    setPhoneNumber(PhoneNumber);
  };
  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(
        register(
          firstName, 
          lastName, 
          email, 
          password, 
          phoneNumber
        ))
        .then(() => {
          setSuccessful(true);
          alert("Successfully "+{ firstName }+" Registered");
          navigate(`/`);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <>
      <FormContainer className="card card-container">
        <FormPB
        className="profileIMG"
          src={ProfileImg}
          alt="profile-img"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="firstName">Firstname</label>
                <Input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={firstName}
                  onChange={onChangeFirstName}
                  validations={[requiredField, validName]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Lastname</label>
                <Input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={lastName}
                  onChange={onChangeLastName}
                  validations={[requiredField, validName]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[requiredField, validEmail]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[requiredField, validPassword]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Input
                  type="phoneNumber"
                  className="form-control"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={onChangePhoneNumber}
                  validations={[requiredField, validPhoneNumber]}
                />
              </div>

              <div className="form-group">
                <button style={{ margin: "3% auto 0",display: "block"}}  className="btn btn-primary btn-block">Register</button>
              </div>
            </div>
          )}

          {response && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {response.message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </FormContainer>
    </>
  );
};

export default Register;
