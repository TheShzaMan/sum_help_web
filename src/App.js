import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LegalPage from "./components/LegalPage";

function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/legal' element={<LegalPage />} />
		</Routes>
	);
}

export default App;
