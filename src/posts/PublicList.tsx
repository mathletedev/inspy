import firebase from "firebase/app";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { PublicIdea } from "../common/PublicIdea";

interface Props {
	firestore: firebase.firestore.Firestore;
	user: firebase.User;
}

export const PublicList: React.FC<Props> = ({ firestore, user }) => {
	const ideasRef = firestore.collection("ideas");
	const query = ideasRef
		.where("public", "==", true)
		.orderBy("likeCount")
		.limit(10);

	const [ideas] = useCollectionData(query, { idField: "id" });

	return (
		<div>
			{ideas &&
				ideas.map((idea) => (
					<PublicIdea
						key={idea.id}
						firestore={firestore}
						idea={idea}
						user={user}
					/>
				))}
		</div>
	);
};
