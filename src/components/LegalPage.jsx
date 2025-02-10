import React, { useState } from "react";
import "../App.css";
import PrivacyPolicy from "../elements/PrivacyPolicy";
import TermsAndConditions from "../elements/TermsAndConditions";

const LegalPage = () => {
	const [activeDrawer, setActiveDrawer] = useState(null);

	const toggleDrawer = (drawer) => {
		setActiveDrawer(activeDrawer === drawer ? null : drawer);
	};

	return (
		<div className='App-header'>
			<div className='background'></div>
			<button className='button' onClick={() => toggleDrawer("privacy")}>
				Privacy Policy
			</button>
			<div
				className={`drawer ${
					activeDrawer === "privacy" ? "active" : ""
				}`}
			>
				<PrivacyPolicy />
			</div>
			<button className='button' onClick={() => toggleDrawer("terms")}>
				Terms and Conditions
			</button>
			<div
				className={`drawer ${activeDrawer === "terms" ? "active" : ""}`}
			>
				<TermsAndConditions />
			</div>
		</div>
	);
};

export default LegalPage;
