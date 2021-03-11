import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
	isLoggedIn: boolean;
}

export const PrivateRoute: React.FC<Props> = ({ isLoggedIn, ...props }) => {
	return isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
};
