import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import HtmlFileDisplay from "./HtmlFileDisplay";

const LegalPage = () => {
	const [activeDrawer, setActiveDrawer] = useState(null);
	const [terms, setTerms] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
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
						className={`button-text ${
							activeDrawer === "privacy" ? "active" : ""
						}`}
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
							<HtmlFileDisplay
								htmlFilePath={"/legal/privacy-policy.htm"}
							/>
						</text>
					</div>
					<text
						className={`button-text ${
							activeDrawer === "terms" ? "active" : ""
						}`}
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
							<HtmlFileDisplay
								htmlFilePath={"/legal/terms.htm"}
								document={terms}
							/>
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
