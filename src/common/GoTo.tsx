import React from "react";
import { useHistory } from "react-router-dom";

interface Props {
	redirectTo: string;
	name: string;
}

export const GoTo: React.FC<Props> = ({ redirectTo, name }) => {
	const history = useHistory();

	return <button onClick={() => history.push(redirectTo)}>{name}</button>;
};
