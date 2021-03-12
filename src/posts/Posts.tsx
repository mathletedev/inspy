import firebase from "firebase/app";
import React from "react";
import { GoTo } from "../common/GoTo";
import { PublicList } from "./PublicList";

interface Props {
	firestore: firebase.firestore.Firestore;
	user: firebase.User;
}

export const Posts: React.FC<Props> = ({ firestore, user }) => {
	return (
		<div>
			<GoTo redirectTo="/" name="Home" />
			<PublicList firestore={firestore} user={user} />
		</div>
	);
};
