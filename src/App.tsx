import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Landing } from "./components/Landing";
import { firebaseConfig } from "./config.json";
import { PrivateRoute } from "./utils/PrivateRoute";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default () => {
	const [user, setUser] = useState<firebase.User | null | undefined>(undefined);

	auth.onAuthStateChanged(
		(authUser) => setUser(authUser),
		() => setUser(null)
	);

	return user === undefined ? (
		<div></div>
	) : (
		<BrowserRouter>
			<Switch>
				<PrivateRoute
					isLoggedIn={!!user}
					path="/"
					exact
					render={() => user && <Home auth={auth} />}
				/>
				<Route
					path="/login"
					exact
					render={() => (user ? <Redirect to="/" /> : <Landing auth={auth} />)}
				/>
				<Route path="/" render={() => <div>404 Page Not Found</div>} />
			</Switch>
		</BrowserRouter>
	);
};
