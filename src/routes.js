import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import App from "./App";


const Routes = props => (
	<Router>
		<ScrollToTop>
			<Route exact path="/" component={App} />
		</ScrollToTop>
	</Router>
);

export default Routes;
