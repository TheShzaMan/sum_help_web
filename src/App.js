import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LegalPage from "./components/LegalPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/legal' element={<LegalPage />} />
			</Routes>
		</Router>
	);
}

export default App;
