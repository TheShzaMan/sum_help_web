import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import HtmlFileDisplay from "./HtmlFileDisplay";

const DataPage = () => {
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
							<text>Data</text>
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
								activeDrawer === "data" ? "active" : ""
							}`}
							onClick={() => toggleDrawer("data")}
						>
							Data Deletion Request
						</text>
					</div>
				</div>
				<div className='button-drawer-container'>
					<div
						className={`drawer ${
							activeDrawer === "data" ? "active" : ""
						}`}
					>
						<text className='drawer-text'>
							<HtmlFileDisplay
								htmlFilePath={
									"/data/accountDataDeletionRequest.htm"
								}
							/>
						</text>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataPage;
