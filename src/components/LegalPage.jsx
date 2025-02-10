import React, { useState } from "react";
import { Link } from "react-router-dom";
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
			<div className='bg-landing'>
				<div className='content'>
					<text
						className='button-text'
						onClick={() => toggleDrawer("privacy")}
					>
						Privacy Policy
					</text>
					<div
						className={`drawer ${
							activeDrawer === "privacy" ? "active" : ""
						}`}
					>
						<PrivacyPolicy />
					</div>
					<text
						className='button-text'
						onClick={() => toggleDrawer("terms")}
					>
						Terms and Conditions
					</text>
					<div
						className={`drawer ${
							activeDrawer === "terms" ? "active" : ""
						}`}
					>
						<TermsAndConditions />
					</div>
					<Link to='/'>
						<div className='exit'>
							<text className='exit'>exit</text>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LegalPage;
