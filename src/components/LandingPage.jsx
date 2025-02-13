import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const LandingPage = () => {
	const [activeDrawer, setActiveDrawer] = useState(null);

	const handleClick = () => {
		console.log("Button clicked!");
	};

	const toggleDrawer = (drawer) => {
		setActiveDrawer(activeDrawer === drawer ? null : drawer);
	};

	return (
		<div className='App-header'>
			<div className='bg-landing'>
				<div className='content'>
					<div className='button-drawer-container'>
						<text className='button-text' onClick={handleClick}>
							About
						</text>
						<text
							className='button-text'
							onClick={() => toggleDrawer("contact")}
						>
							Contact
						</text>
						<Link className='button-text' to='/legal'>
							<text>Legal</text>
						</Link>
					</div>
				</div>
				<div className='button-drawer-container'>
					<div
						className={`drawer ${
							activeDrawer === "contact" ? "active" : ""
						}`}
					>
						<text className='drawer-text'>
							{/* <HtmlFileDisplay
								htmlFilePath={"/legal/privacy-policy.htm"}
							/> */}
						</text>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
