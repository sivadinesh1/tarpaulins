import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import HomeComponent from "./home/home";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={HomeComponent} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
