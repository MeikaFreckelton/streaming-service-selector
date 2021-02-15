import React from "react";

//Utils
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Component
import App from "./App";



ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);


