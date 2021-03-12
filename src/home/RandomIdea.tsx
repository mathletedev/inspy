import firebase from "firebase/app";
import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { PublicIdea } from "../common/PublicIdea";

interface Props {
	firestore: firebase.firestore.Firestore;
	user: firebase.User;
}

const useForceUpdate = () => {
	const [value, setValue] = useState(0);
	return () => setValue((value) => value + 1);
};

export const RandomIdea: React.FC<Props> = ({ firestore, user }) => {
	const ideasRef = firestore.collection("ideas");
	const query = ideasRef.where("public", "==", true);

	const [ideas] = useCollectionData(query, { idField: "id" });

	const forceUpdate = useForceUpdate();

	return (
		<div>
			{ideas && ideas.length && (
				<div>
					<PublicIdea
						firestore={firestore}
						idea={ideas[Math.floor(Math.random() * ideas.length)]}
						user={user}
					/>
					<button onClick={forceUpdate}>Generate new idea</button>
				</div>
			)}
		</div>
	);
};
