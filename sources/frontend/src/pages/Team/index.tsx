import React from "react";
import { TeamCard } from "../../components";

const Team = () => {
	return (
		<React.Fragment>
			<div className='leader-board px-8 py-24 bg-base-100'>
				<div className='container my-0 mx-auto'>
					<h3 className='text-white text-4xl font-bold text-center mb-4'>Team Members</h3>
					<p className='text-center'>Dummy text is also used to demonstrate the appearance of different typefaces and layouts</p>
					<div className='overflow-x-auto w-full mt-8 grid grid-cols-12'>
						<TeamCard 
							name="Abdulaziz" 
							profile="https://avatars.githubusercontent.com/u/64299663?v=4" 
							job="Fullstack Developer"
							classes="col-start-1"
						/>
						
						<TeamCard
							name="Arbi Elmas"
							profile="https://rockstheme.com/rocks/playdo-live/img/team/t2.jpg"
							job="Backend Developer"
							classes="col-start-5"
						/>
						
						<TeamCard
							name="Ömer Faruk Öz"
							profile="https://rockstheme.com/rocks/playdo-live/img/team/t1.jpg"
							job="Game Developer"
							classes="col-end-12"
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Team;