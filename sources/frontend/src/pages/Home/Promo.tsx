import React from "react";

import { Button } from "../../components";
import bgImage from "../../assets/promo.jpg";

const Promo = () => {
	return (
		<div className="hero min-h-screen pt-20" style={{backgroundImage: `url(${bgImage})`}} >
			<div className="hero-overlay bg-opacity-60"></div>	
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Deep Thought</h1>
					<p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
					<Button link="/auth" text="Getting Started" className="btn-primary"/>
				</div>
			</div>
		</div>
	);
}

export default Promo;