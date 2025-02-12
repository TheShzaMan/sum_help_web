import React, { useEffect, useState } from "react";
import "../App.css";

const PrivacyPolicy = () => {
	const [privacy, setPrivacy] = React.useState("");
	useEffect(() => {
		fetch("/legal/privacy-policy.htm")
			.then((response) => response.text())
			.then((text) => setPrivacy(text));
	}, []);

	return (
		<div
			className='drawer-text'
			dangerouslySetInnerHTML={{ __html: privacy }}
		/>
	);
};

export default PrivacyPolicy;
