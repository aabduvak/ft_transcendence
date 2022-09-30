import React, { useContext } from "react";

import { Button } from "../../components";
import { AuthContext } from "../../components/context/auth-context";

import FirstKill from '../../assets/badges/first-kill.png';
import MegaKill from '../../assets/badges/mega-kill.png';
import UltraKill from '../../assets/badges/ultra-kill.png';
import MaxLevel from '../../assets/badges/max-level.png';

const Profile = () => {	
	const auth = useContext(AuthContext);

	return (
		<React.Fragment>
			<div className="profile px-8 py-24 bg-base-100">
				<div className="container my-0 mx-auto">
					<div className="grid grid-cols-3 gap-8">
						<div className="col-span-1 bg-base-300 px-7 py-5 rounded-xl">
							<div className="flex flex-col items-center space-x-3 text-center">
								<div className="avatar">
									<div className={`mask mask-squircle w-24 h-24 avatar`}>
										<img src={`https://avatars.githubusercontent.com/u/64299663?v=4`} alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div className="font-bold mt-4">Abdulaziz Abduvakhobov</div>
									<div className="text-sm opacity-50 mt-2">Country: Türkiye</div>
								</div>
								<div className="flex justify-around mt-4 w-full">
									{auth.isLoggedIn && (
										<React.Fragment>
											<Button text="Message" link="/send-message" className="btn-outline btn-secondary"/>
											<Button text="Add friends" link="/add" className="btn-info text-white" />
										</React.Fragment>
									)}
								</div>
							</div>
						</div>

						<div className="col-span-2 bg-base-300 px-7 py-5 rounded-xl">
							<div className="flex flex-col">
								
								<div className="grid grid-cols-5">
									<div className="col-span-2 text-secondary">Full Name:</div>
									<div className="col-span-2">Abdulaziz Abduvakhobov</div>
								</div>
								
								<div className="divider"></div> 
								
								<div className="grid grid-cols-5">
									<div className="col-span-2 text-secondary">Email:</div>
									<div className="col-span-2">abdulaziz.yosk@gmail.com</div>
								</div>
								
								<div className="divider"></div> 
								
								<div className="grid grid-cols-5">
									<div className="col-span-2 text-secondary">Played Games:</div>
									<div className="col-span-2">243 games (190 wins)</div>
								</div>
								
								<div className="divider"></div> 
								
								<div className="grid grid-cols-5">
									<div className="col-span-2 text-secondary">Level:</div>
									<div className="col-span-2">112 Level</div>
								</div>
							</div>
						</div>
						
						<div className="col-span-3 bg-base-300 px-7 py-5 rounded-xl">
							<h3 className='text-white text-4xl font-bold text-center mb-4'>Achievements</h3>
							<div className="grid grid-cols-6 mt-8">
								<div className="col-start-2 col-span-1">
									<div className="avatar">
										<img src={`${FirstKill}`} alt="first-kill"/>
									</div>
								</div>
								
								<div className="col-span-1">
									<div className="avatar">
										<img src={`${MegaKill}`} alt="mega-kill"/>
									</div>
								</div>
								
								<div className="col-span-1">
									<div className="avatar">
										<img src={`${UltraKill}`} alt="first-kill"/>
									</div>
								</div>
								
								<div className="col-span-1">
									<div className="avatar">
										<img src={`${MaxLevel}`} alt="first-kill"/>
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

export default Profile;