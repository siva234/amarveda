import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainNavBar from "./Components/MainNavBar/MainNavBar";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";

function App() {
	return (
		<div className="App">
			<MainNavBar />
			<Switch>
				<Route path="/contactus">
					<ContactUs />
				</Route>
				<Route path="/products">
					<Products />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
