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
			<div>
				<Card/>
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
};
