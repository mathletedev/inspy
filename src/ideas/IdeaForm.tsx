import firebase from "firebase/app";
import React, { useState } from "react";

interface Props {
	firestore: firebase.firestore.Firestore;
	user: firebase.User;
}

export const IdeaForm: React.FC<Props> = ({ firestore, user }) => {
	const [formValue, setFormValue] = useState({ title: "", description: "" });

	const addIdea = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const ideasRef = firestore.collection("ideas");
		await ideasRef.add({
			author: user.uid,
			time: firebase.firestore.FieldValue.serverTimestamp(),
			title: formValue.title,
			description: formValue.description,
			likes: 0,
			public: false
		});

		setFormValue({
			title: "",
			description: ""
		});
	};

	const editForm = (e: any) => {
		setFormValue({
			...formValue,
			[e.target.name]: e.target.value
		});
	};

	return (
		<form onSubmit={addIdea}>
			<input
				value={formValue.title}
				name="title"
				onChange={editForm}
				placeholder="Title"
			/>
			<input
				value={formValue.description}
				name="description"
				onChange={editForm}
				placeholder="Description"
			/>
			<button
				type="submit"
				disabled={!formValue.title || !formValue.description}
			>
				Add idea
			</button>
		</form>
	);
};
