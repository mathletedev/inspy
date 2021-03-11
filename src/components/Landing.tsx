import firebase from "firebase/app";
import React from "react";
import { SignIn } from "../utils/SignIn";

interface Props {
	auth: firebase.auth.Auth;
}

export const Landing: React.FC<Props> = ({ auth }) => {
	return (
		<div>
			<h1>Inspy</h1>
			<SignIn auth={auth} />
		</div>
	);
};
