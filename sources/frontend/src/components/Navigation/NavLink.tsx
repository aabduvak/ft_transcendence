import React from "react";
import { Link } from "react-router-dom";

interface NavLinkComponents {
	link: string,
	text: string
}

const NavLink = ({link, text}: NavLinkComponents) => {
	return (
		<li>
			<Link to={link}>
				{text}
			</Link>
		</li>
	);
}

export default NavLink;