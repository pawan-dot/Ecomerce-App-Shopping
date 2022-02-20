import React, { Fragment, useState, useEffect } from "react";
import "./Login.css";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate } from 'react-router';

const Login = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    let navigate = useNavigate();

    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user
    );




    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");



    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    };



    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isAuthenticated) {
            navigate("/");
        }
    }, [dispatch, error, alert, navigate, isAuthenticated]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="LoginSignUpContainer">

                        <div className="LoginSignUpBox">
                            <div className="login_signUp_toggle">
                                <p >PLEASE LOGIN!!</p>

                            </div>
                            <form className="loginForm" onSubmit={loginSubmit}>
                                <div className="lo        ginEmail">
                                    <MailOutlineIcon />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                </div>
                                <div className="loginPassword">
                                    <LockOpenIcon />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                    />
                                </div>
                                <Link to="/password/forgot">Forget Password ?</Link>
                                <input type="submit" value="Login" className="loginBtn" />
                            </form>
                        </div>
                    </div>

                </>
            )}
        </>
    )
}

export default Login