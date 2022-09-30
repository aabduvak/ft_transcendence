import React from "react";

import Partner1 from '../../assets/partner-1.png';
import Partner2 from '../../assets/partner-2.png';
import Partner3 from '../../assets/partner-3.png';
import Partner4 from '../../assets/partner-4.png';
import Partner5 from '../../assets/partner-5.png';

const Partners = () => {
	return (
		<React.Fragment>
			<div className="partners p-8 bg-base-100">
				<div className="container my-0 mx-auto">
					<h3 className='text-white text-4xl font-bold text-center mb-4'>Game Partners</h3>
					<p className='text-center'>Dummy text is also used to demonstrate the appearance of different typefaces and layouts</p>
					
					<div className="partners-wrapper grid grid-cols-10 justify-center">
						<div className="col-span-2">
							<img src={`${Partner1}`} alt="logo" />
						</div>
						
						<div className="col-span-2">
							<img src={`${Partner2}`} alt="logo" />
						</div>
						
						<div className="col-span-2">
							<img src={`${Partner3}`} alt="logo" />
						</div>
						
						<div className="col-span-2">
							<img src={`${Partner4}`} alt="logo" />
						</div>
						
						<div className="col-span-2">
							<img src={`${Partner5}`} alt="logo" />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Partners;