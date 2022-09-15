import React from "react";
import { Link } from "react-router-dom";

interface ButtonComponents {
	link: string,
	text: string,
	className: string
}

const Button = ({link, text, className = ""}: ButtonComponents) => {
	return (
		<Link to={link} className={`btn ${className}`}>
			{text}
		</Link>
	);
}

export default Button;