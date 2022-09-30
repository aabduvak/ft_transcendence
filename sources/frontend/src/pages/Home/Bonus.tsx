import React from "react";

import bgImage from '../../assets/bg.png';
import IconLive from '../../assets/icons/ab-icon.png';
import IconBonus from '../../assets/icons/ab-icon2.png';
import IconSupport from '../../assets/icons/ab-icon6.png';

const Bonus = () => {
	return (
		<React.Fragment>
			<div className="bonus bg-base-300 py-10">
				<div className="container mx-auto my-0">
					<div className="grid grid-cols-12 justify-center gap-8">
						<div className="col-start-1 col-end-6">
							<img src={`${bgImage}`} alt="logo" className="block" />
						</div>
						<div className="col-start-7 col-end-12">
							<div className="support-services bg-base-100 px-8 py-5 flex justify-between rounded-lg mb-8">
								<img className="support-images w-20 h-20" src={`${IconLive}`} alt="icon" />
								<div className="support-content">
									<h4 className="text-white capitalize font-bold mb-3">Live online game</h4>
									<p>Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then.</p>
								</div>
							</div>
							<div className="support-services bg-base-100 px-8 py-5 flex justify-between rounded-lg mb-8">
								<img className="support-images w-20 h-20" src={`${IconBonus}`} alt="icon" />
								<div className="support-content">
									<h4 className="text-white capitalize font-bold mb-3">Instant Bonus</h4>
									<p>Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then</p>
								</div>
							</div>
							
							<div className="support-services bg-base-100 px-8 py-5 flex justify-between rounded-lg mb-8">
								<img className="support-images w-20 h-20" src={`${IconSupport}`} alt="icon" />
								<div className="support-content">
									<h4 className="text-white capitalize font-bold mb-3">Live Support</h4>
									<p>Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Bonus;