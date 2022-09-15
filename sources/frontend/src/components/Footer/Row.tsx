import React from "react";
import { Link } from "react-router-dom";

interface RowProps {
	title : string;
	links : string[];
}

const Row = ({title, links}: RowProps) => {
	return (
		<div>
			<span className="footer-title">{title}</span>
			{links.map(item => {
				return <Link className="link link-hover" to="#">{item}</Link>
			})}
		</div>
	);
}

export default Row;