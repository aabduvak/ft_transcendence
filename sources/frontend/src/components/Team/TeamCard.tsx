import React from "react";

interface CardDetails {
	name: string,
	job: string,
	profile: string,
	classes: string
}

const TeamCard = ({name, job, profile, classes}: CardDetails) => {
	return (
		<React.Fragment>
			<div className={`col-span-3 bg-base-300 ${classes}`}>
				<div className="p-8 w-full text-center">
					<div className="inline-block relative overflow-hidden w-44 h-44 rounded-full">
						<a href="#">
							<img src={`${profile}`} alt="img" />
						</a>
					</div>
					<div className="team-content">
						<h4 className="font-bold uppercase text-white text-lg leading-8 mt-4">{name}</h4>
						<p className="mt-4">{job}</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default TeamCard;