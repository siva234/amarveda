import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LangWrapper from "./Components/LangWrapper/LangWrapper";
ReactDOM.render(
	<LangWrapper>
		<BrowserRouter>
			<App date={Date.now} />
		</BrowserRouter>
	</LangWrapper>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
