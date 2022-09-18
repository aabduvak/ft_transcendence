import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";

import { AuthContext } from '../context/auth-context';
import NavLink from "./NavLink";

const NavLinks = () => {
	const auth = useContext(AuthContext);

	return (
		<div className="container grid grid-cols-12 gap-4 py-2">
			<div className="col-span-2">
				<Link to="/" className={`btn btn-ghost normal-case text-xl text-white`}>
					Deep Thought
				</Link>
			</div>
			<div className="col-span-7">
				<ul className="menu menu-horizontal p-0">
					<NavLink text="About" link="/about" />
					<NavLink text="Team" link="/team" />
					<NavLink text="Play Online" link="/play" />
					<NavLink text="Forum" link="/forum" />
					<NavLink text="Users" link="/users" />
					<li>
						<a>
							Game
							<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
						</a>
						<ul className="p-2 bg-base-300 z-10">
							<NavLink text="Leader Board" link="/leader-board" />
							<NavLink text="Match History" link="/history" />
						</ul>
					</li>
				</ul>
			</div>
			<div className="col-span-3 flex justify-end">
				{auth.isLoggedIn && (
					<div className="form-control mr-2">
						<input type="text" placeholder="Search" className="input input-bordered" />
					</div>
				)}

				{auth.isLoggedIn && (
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src="https://placeimg.com/80/80/people" />
							</div>
						</label>
						<ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52">
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li><a>Friends</a></li>
							<li><a>Chat</a></li>
							<li><a>Settings</a></li>
							<li>
								<Link to={'/logout'} onClick={auth.logout}>
									Logout
								</Link>
							</li>
						</ul>
					</div>
				)}

				{!auth.isLoggedIn && (
					<Link to={'/auth'} className="btn bg-primary text-white" onClick={auth.login}>
						Log in
					</Link>
				)}
			</div>
		</div>
	);
}

export default NavLinks;