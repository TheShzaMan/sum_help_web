import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ContactForm from "./ContactForm";

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
				<div className={`content ${activeDrawer ? "drawer-open" : ""}`}>
					<div className='button-drawer-container'>
						<text className='button-text' onClick={handleClick}>
							About
						</text>
						<text
							className={`button-text ${
								activeDrawer === "contact" ? "active" : ""
							}`}
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
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
