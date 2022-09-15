import React from "react";

import Bonus from "./Bonus";
import Promo from "./Promo";
import Stats from "./Stats";
import Slider from "./Slider";

const Home = () => {
	return (
		<React.Fragment>
			<Promo />
			<Stats />
			<Bonus />
			<Slider />
		</React.Fragment>
	);
}

export default Home