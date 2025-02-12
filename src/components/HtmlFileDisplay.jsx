import React, { useEffect, useState } from "react";
import "../App.css";

const HtmlFileDisplay = ({ htmlFilePath }) => {
	const [htmlFile, setHtmlFile] = useState("");
	useEffect(() => {
		fetch(htmlFilePath)
			.then((response) => response.text())
			.then((text) => setHtmlFile(text));
	}, [htmlFilePath]);

	return (
		<div
			className='drawer-text'
			dangerouslySetInnerHTML={{ __html: htmlFile }}
		/>
	);
};

export default HtmlFileDisplay;
