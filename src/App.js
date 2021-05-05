import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LangSelector from "./Components/LangSelector/LangSelector";
import { FormattedMessage } from "react-intl";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<LangSelector />
				<h1>
					<FormattedMessage id="app.title" defaultMessage="AmarVeda" />
				</h1>
			</header>
		</div>
	);
}

export default App;
