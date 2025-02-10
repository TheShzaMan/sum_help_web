import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const LandingPage = () => {
	const handleClick = () => {
		console.log("Button clicked!");
	};

	return (
		<div className='App-header'>
			<div className='bg-landing'>
				<div className='content'>
					<text className='button-text' onClick={handleClick}>
						About Us
					</text>
					<text className='button-text'>Contact</text>
					<Link className='button-text' to='/legal'>
						<text>Legal</text>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
