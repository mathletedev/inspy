import firebase from "firebase/app";
import React from "react";
import { Data } from "react-firebase-hooks/firestore/dist/firestore/types";

interface Props {
	firestore: firebase.firestore.Firestore;
	idea: Data<firebase.firestore.DocumentData, "", "">;
	user: firebase.User;
}

export const PublicIdea: React.FC<Props> = ({ firestore, idea, user }) => {
	const ideasRef = firestore.collection("ideas");

	const toggleLike = () => {
		const ideaDoc = ideasRef.doc(idea.id);
		const newLikes = idea.likes.includes(user.uid)
			? idea.likes.filter((like: string) => like !== user.uid)
			: [...idea.likes, user.uid];

		ideaDoc.update({
			likes: newLikes,
			likeCount: newLikes.length
		});
	};

	return (
		<fieldset>
			<legend>{idea.title}</legend>
			<div>{idea.description}</div>
			<div>
				Likes: {idea.likes.length}
				<button onClick={toggleLike}>
					{idea.likes.includes(user.uid) ? "Unlike" : "Like"}
				</button>
			</div>
		</fieldset>
	);
};
