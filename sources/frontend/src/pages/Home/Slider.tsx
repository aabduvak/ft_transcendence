import React from 'react';

import G1 from '../../assets/g1.png';
import G3 from '../../assets/g3.png';
import G4 from '../../assets/g4.png';
import G5 from '../../assets/g5.png';

const Slider = () => {
	return (
		<React.Fragment>
			<div className="slider bg-base-100 py-12">
				<div className="container my-0 mx-auto">
					<div className="section-headline text-center">
						<h3 className='text-white text-4xl font-bold mb-4'>Online games</h3>
						<p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts</p>

						<div className="slider-wrapper grid grid-cols-12 gap-8 pt-8">
							<div className="col-span-3">
								<div className="card bg-base-300 shadow-xl">
									<figure><img src={`${G1}`} className="block w-full h-auto" alt="img" /></figure>
									<div className="card-body">
										<h2 className="card-title">
											Best Reward											
											<div className="badge badge-secondary">SOON</div>
										</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
										<div className="card-actions justify-end">
											<div className="badge badge-outline text-primary">Casino</div>
											<div className="badge badge-outline text-secondary">Game</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-span-3">
								<div className="card bg-base-300 shadow-xl">
									<figure><img src={`${G3}`} className="block w-full h-auto" alt="img" /></figure>
									<div className="card-body">
										<h2 className="card-title">
											Win Award										
											<div className="badge badge-secondary">SOON</div>
										</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
										<div className="card-actions justify-end">
											<div className="badge badge-outline text-primary">Poker</div>
											<div className="badge badge-outline text-secondary">Game</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-span-3">
								<div className="card bg-base-300 shadow-xl">
									<figure><img src={`${G4}`} className="block w-full h-auto" alt="img" /></figure>
									<div className="card-body">
										<h2 className="card-title">
											Best Game										
											<div className="badge badge-secondary">SOON</div>
										</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
										<div className="card-actions justify-end">
											<div className="badge badge-outline text-primary">Game</div>
											<div className="badge badge-outline text-secondary">Best</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-span-3">
								<div className="card bg-base-300 shadow-xl">
									<figure><img src={`${G5}`} className="block w-full h-auto" alt="img" /></figure>
									<div className="card-body">
										<h2 className="card-title">
											Pirates of Sea									
											<div className="badge badge-secondary">SOON</div>
										</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
										<div className="card-actions justify-end">
											<div className="badge badge-outline text-primary">Pirates</div>
											<div className="badge badge-outline text-secondary">Game</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Slider;