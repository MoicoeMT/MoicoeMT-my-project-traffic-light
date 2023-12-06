import React, { useState } from "react";

//create your first component
const Home = () => {

	const [selectedColor, setSelectedColor] = useState("yellow");

	return (
		<>
			<div id="traffic-top" className="d-flex justify-content-center aling-item-center"></div>
			<div className="container bg-black py-2 rounded-4">
				<div
					className={
						"light-red" + (selectedColor === "red" ? " glow" : "")
					}
					onClick={() => setSelectedColor("red")}>
				</div>
				<div
					className={
						"light-yellow my-2" + (selectedColor  === "yellow" ? " glow" : "")
					}
					onClick={() => setSelectedColor("yellow")}>
				</div>
				<div
					className={
						"light-green" + (selectedColor  === "green" ? " glow" : "")
					}
					onClick={() => setSelectedColor("green")}>
				</div>
			</div>
		</>

	);
};

export default Home;
