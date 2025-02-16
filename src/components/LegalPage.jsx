import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import HtmlFileDisplay from "./HtmlFileDisplay";

const LegalPage = () => {
	const [activeDrawer, setActiveDrawer] = useState(null);
	const navigate = useNavigate();

	const toggleDrawer = (drawer) => {
		setActiveDrawer(activeDrawer === drawer ? null : drawer);
	};

	const handleCloseDrawerLink = () => {
		setActiveDrawer(null);
		setTimeout(() => {
			navigate("/");
		}, 900);
	};

	return (
		<div className='App-header'>
			<div className='bg-landing'>
				<div className={`content ${activeDrawer ? "drawer-open" : ""}`}>
					{activeDrawer && (
						<div
							className='invisibleDrawerClose'
							onClick={handleCloseDrawerLink}
						/>
					)}
					<div className='button-drawer-container'>
						<Link className='button-text' to='/'>
							<text>About</text>
						</Link>
						{/* <Link className='button-text' to='/'>
							<text>Contact</text>
						</Link> */}
						<Link className='button-text' to='/'>
							<text>Legal</text>
						</Link>
					</div>
					<div className='button-drawer-container'>
						<text
							className={`button-text ${
								activeDrawer === "privacy" ? "active" : ""
							}`}
							onClick={() => toggleDrawer("privacy")}
						>
							Privacy Policy
						</text>
						<text
							className={`button-text ${
								activeDrawer === "terms" ? "active" : ""
							}`}
							onClick={() => toggleDrawer("terms")}
						>
							Terms of Use
						</text>
					</div>
				</div>
				<div className='button-drawer-container'>
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
					<div
						className={`drawer ${
							activeDrawer === "terms" ? "active" : ""
						}`}
					>
						<text className='drawer-text'>
							<HtmlFileDisplay
								htmlFilePath={"/legal/terms.htm"}
								// document={terms}
							/>
						</text>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LegalPage;
