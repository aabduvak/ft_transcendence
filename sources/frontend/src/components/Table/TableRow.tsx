import React from "react";
import { Link } from "react-router-dom";

interface RowDetails {
	rank: number
	name: String,
	country: String,
	avatar: String,
	played: number,
	level: number,
	link: string,
	rate: number,
	online: boolean
}

const TableRow = (
	{
		name,
		country,
		rank,
		avatar,
		played,
		level,
		link,
		rate,
		online = false
	}: RowDetails) => {
	
	let status = 'offline';
	
	if (online)
		status = 'online'
	
	return (
		<tr>
			<th>
				{rank}
			</th>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className={`mask mask-squircle w-12 h-12 avatar ${status}`}>
							<img src={`${avatar}`} alt="Avatar Tailwind CSS Component" />
						</div>
					</div>
					<div>
						<div className="font-bold">{name}</div>
						<div className="text-sm opacity-50">{country}</div>
					</div>
				</div>
			</td>
			<td>
				{played} games played
				<br />
				<span className="badge badge-ghost badge-sm">{rate}% victory</span>
			</td>
			<td>{level} level</td>
			<th>
				<Link to={`/users/${link}`} className="btn btn-ghost btn-xs">details</Link>
			</th>
		</tr>
	);
}

export default TableRow;