import React from "react";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import Card from "../componants/Card";
import Curousel from "../componants/Curousel";

export const Home = () => {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div>
				<Curousel/>
			</div>
			<div className="m-3">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
};
