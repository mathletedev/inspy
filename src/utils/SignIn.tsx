import firebase from "firebase/app";
import React from "react";

interface Props {
	auth: firebase.auth.Auth;
}

export const SignIn: React.FC<Props> = ({ auth }) => {
	const signIn = () =>
		auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

	return <button onClick={signIn}>Sign in with Google</button>;
};
