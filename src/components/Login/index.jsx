import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"; 

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { 
    FormContainer,
    FormPB 
} from "../../styles/Style";
import ProfileImg from "../../images/pb.jpg";
import { login } from "../../store/actions/auth";


const required = (value) => {
    if (!value) {
        return (
        <div className="alert alert-danger" role="alert">
            This field is required!
        </div>
        );
    }
    };

const Login = (props) => {

    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { isLoggedIn, user } = useSelector(state => state.auth);
    const { response } = useSelector(state => state.response);

    const dispatch = useDispatch();

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
       };
    const onChangePassword = (e) => {
            const password = e.target.value;
            setPassword(password);
    };
    
    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(email, password))
            .then(() => {
                props.history.push("/profile");
                window.location.reload();
            })
            .catch(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }
    if (isLoggedIn) {
        //Store user id in localstorage
        localStorage.setItem("userId", user.id);
        return <Navigate to="/profile" />;
    }

    return (
        <>
            <FormContainer className="card card-container">
                <FormPB
                    className="profileIMG" src={ProfileImg}
                    alt="profile-img"
                />
                <Form onSubmit={handleLogin} ref={form}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                            validations={[required]}
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
                            validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <button  id="SubmitLogin" style={{ margin: "3% auto 0",display: "block"}} className="btn btn-primary btn-block test" disabled={loading}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                            
                        </button>
                    </div>

                    {response && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {response}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </FormContainer>
        </>
    );
};

export default Login;