import React from "react";
import { Route, Routes } from "react-router-dom";
import DataPage from "./components/DataPage";
import LandingPage from "./components/LandingPage";
import LegalPage from "./components/LegalPage";

function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/legal' element={<LegalPage />} />
			<Route path='/data' element={<DataPage />} />
		</Routes>
	);
}

export default App;
