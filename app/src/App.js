import { BrowserRouter, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Create} exact />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
