import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownDocDisplay = ({ document }) => {
	return <ReactMarkdown>{document}</ReactMarkdown>;
};

export default MarkdownDocDisplay;
