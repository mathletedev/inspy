import firebase from "firebase/app";
import React from "react";
import { GoTo } from "../common/GoTo";
import { RandomIdea } from "./RandomIdea";
import { SignOut } from "./SignOut";

interface Props {
	auth: firebase.auth.Auth;
	firestore: firebase.firestore.Firestore;
	user: firebase.User;
}

export const Home: React.FC<Props> = ({ auth, firestore, user }) => {
	return (
		<div>
			<h1>Inspy</h1>
			<SignOut auth={auth} />
			<GoTo redirectTo="/ideas" name="Ideas" />
			<GoTo redirectTo="/posts" name="Posts" />
			<RandomIdea firestore={firestore} user={user} />
		</div>
	);
};
