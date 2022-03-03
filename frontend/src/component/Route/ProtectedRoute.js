import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { useNavigate } from 'react-router';
// import {
//     BrowserRouter,
//     Routes,
//     Route,
// } from "react-router-dom";
const ProtectedRoute = ({ isAdmin, element: Element, ...rest }) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
    let navigate = useNavigate();

    return (
        <Fragment>
            {loading === false && (
                <Route
                    {...rest}
                    render={(props) => {
                        if (isAuthenticated === false) {
                            return navigate("/login");
                        }

                        if (isAdmin === true && user.role !== "admin") {
                            return navigate("/login");
                        }

                        return <Element {...props} />;
                    }}
                />
            )}
        </Fragment>
    );
};

export default ProtectedRoute;
