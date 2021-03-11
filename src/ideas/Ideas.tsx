import firebase from "firebase/app";
import React from "react";
import { GoTo } from "../common/GoTo";
import { IdeaForm } from "./IdeaForm";
import { IdeaList } from "./IdeaList";

interface Props {
	auth: firebase.auth.Auth;
	firestore: firebase.firestore.Firestore;
	user: firebase.User;
}

export const Ideas: React.FC<Props> = ({ auth, firestore, user }) => {
	return (
		<div>
			<div>
				<GoTo redirectTo="/" name="Home" />
				<IdeaList firestore={firestore} user={user} />
				<IdeaForm firestore={firestore} user={user} />
			</div>
		</div>
	);
};
