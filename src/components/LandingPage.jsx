import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ContactForm from "./ContactForm";

const LandingPage = () => {
	const [activeDrawer, setActiveDrawer] = useState(null);

	const toggleDrawer = (drawer) => {
		setActiveDrawer(activeDrawer === drawer ? null : drawer);
	};

	return (
		<div className='App-header'>
			<div className='bg-landing'>
				<div className={`content ${activeDrawer ? "drawer-open" : ""}`}>
					<div className='button-drawer-container'>
						<Link className='button-text' to='/data'>
							<text>Data</text>
						</Link>
						{/* <text
							className={`button-text ${
								activeDrawer === "contact" ? "active" : ""
							}`}
							onClick={() => toggleDrawer("contact")}
						>
							Contact
						</text> */}
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
