import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { firebaseConfig } from "./config.json";
import { Home } from "./home/Home";
import { Ideas } from "./ideas/Ideas";
import { Landing } from "./landing/Landing";
import { PrivateRoute } from "./utils/PrivateRoute";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

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
				<PrivateRoute
					isLoggedIn={!!user}
					path="/ideas"
					exact
					render={() =>
						user && <Ideas auth={auth} firestore={firestore} user={user} />
					}
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
