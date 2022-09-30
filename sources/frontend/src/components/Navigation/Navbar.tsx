import React from 'react';

import NavLinks from './NavLinks';

const Navbar = () => {
	return (
		<div className="navbar bg-base-300 fixed justify-center z-50">
			<NavLinks />
		</div>
	);
}

export default Navbar;