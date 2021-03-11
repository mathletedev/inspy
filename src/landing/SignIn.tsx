import firebase from "firebase/app";
import React from "react";

interface Props {
	auth: firebase.auth.Auth;
}

export const SignIn: React.FC<Props> = ({ auth }) => {
	const signIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return <button onClick={signIn}>Sign in with Google</button>;
};
