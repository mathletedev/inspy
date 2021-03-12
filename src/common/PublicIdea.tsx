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
		const hasLiked = idea.likes.includes(user.uid);
		ideaDoc.update({
			likes: hasLiked
				? idea.likes.filter((like: string) => like !== user.uid)
				: [...idea.likes, user.uid],
			likeCount: idea.likes.length + (hasLiked ? 1 : -1)
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
