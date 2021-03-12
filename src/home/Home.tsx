import firebase from "firebase/app";
import React from "react";
import { GoTo } from "../common/GoTo";
import { SignOut } from "./SignOut";

interface Props {
	auth: firebase.auth.Auth;
}

export const Home: React.FC<Props> = ({ auth }) => {
	return (
		<div>
			<h1>Inspy</h1>
			<SignOut auth={auth} />
			<GoTo redirectTo="/ideas" name="Ideas" />
			<GoTo redirectTo="/posts" name="Posts" />
		</div>
	);
};
