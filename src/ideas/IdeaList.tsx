import firebase from "firebase/app";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Idea } from "../common/Idea";

interface Props {
	firestore: firebase.firestore.Firestore;
	user: firebase.User;
}

export const IdeaList: React.FC<Props> = ({ firestore, user }) => {
	const ideasRef = firestore.collection("ideas");
	const query = ideasRef.where("author", "==", user.uid).orderBy("time");

	const [ideas] = useCollectionData(query, { idField: "id" });

	return (
		<div>
			{ideas &&
				ideas.map((idea) => (
					<Idea
						key={idea.id}
						firestore={firestore}
						idea={idea}
						showOptions={true}
					/>
				))}
		</div>
	);
};
