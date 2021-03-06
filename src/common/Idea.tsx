import firebase from "firebase/app";
import React from "react";
import { Data } from "react-firebase-hooks/firestore/dist/firestore/types";

interface Props {
	firestore: firebase.firestore.Firestore;
	idea: Data<firebase.firestore.DocumentData, "", "">;
	onDisplay: boolean;
}

export const Idea: React.FC<Props> = ({ firestore, idea, onDisplay }) => {
	const ideasRef = firestore.collection("ideas");

	return (
		<fieldset>
			<legend>{idea.title}</legend>
			<div>{idea.description}</div>
			{!onDisplay && (
				<div>
					<button onClick={() => ideasRef.doc(idea.id).delete()}>
						Delete idea
					</button>
					<button
						onClick={() =>
							ideasRef.doc(idea.id).update({ public: !idea.public })
						}
					>
						{idea.public ? "Public" : "Private"}
					</button>
				</div>
			)}
		</fieldset>
	);
};
