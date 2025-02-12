import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import MarkdownDocDisplay from "./MarkdownDocDisplay";

const LegalPage = () => {
	const [activeDrawer, setActiveDrawer] = useState(null);
	const [privacyPolicy, setPrivacyPolicy] = useState("");
	const [terms, setTerms] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		fetch("/legal/privacy-policy.md")
			.then((response) => response.text())
			.then((text) => setPrivacyPolicy(text));

		fetch("/legal/terms.md")
			.then((response) => response.text())
			.then((text) => setTerms(text));
	}, []);

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
						<text className='drawer-text'>
							<MarkdownDocDisplay document={privacyPolicy} />
						</text>
					</div>
					<text
						className='button-text'
						onClick={() => toggleDrawer("terms")}
					>
						Terms of Use
					</text>
					<div
						className={`drawer ${
							activeDrawer === "terms" ? "active" : ""
						}`}
					>
						<text className='drawer-text'>
							<MarkdownDocDisplay document={terms} />
						</text>
					</div>
					<div className='exit-container'>
						<text onClick={() => navigate("/")} className='exit'>
							home
						</text>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LegalPage;
