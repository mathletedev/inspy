import firebase from "firebase/app";
import React from "react";
import { SignOut } from "../utils/SignOut";

interface Props {
	auth: firebase.auth.Auth;
}

export const Home: React.FC<Props> = ({ auth }) => {
	return (
		<div>
			<h1>Inspy</h1>
			<SignOut auth={auth} />
		</div>
	);
};
