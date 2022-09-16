import React from "react";
import { Link } from "react-router-dom";

import './index.css'

const Http404 = () => {
	return (
		<React.Fragment>
			<div className="error-main-text font-bold text-center pt-24 pb-20">
				<h2 className="error-easy-text">Page Not Found</h2>
				<h1 className="high-text">4<span className="text-primary">0</span>4</h1>
				<h4 className="error-bot">Oops, the page you are looking for does not exit.</h4>
			</div>
		</React.Fragment>
	);
}

export default Http404;