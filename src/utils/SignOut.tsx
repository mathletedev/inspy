import firebase from "firebase/app";
import React from "react";

interface Props {
	auth: firebase.auth.Auth;
}

export const SignOut: React.FC<Props> = ({ auth }) => {
	return <button onClick={() => auth.signOut()}>Sign out</button>;
};
