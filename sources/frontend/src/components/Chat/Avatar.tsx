import React from "react";

interface AvatarImage {
	avatar: string,
	time: string
}
const Avatar = ({avatar, time}: AvatarImage) => {
	return (
		<React.Fragment>
			<div className="col-span-1">
				<div className="user-img my-0 mx-auto">
					<img
						className='avatar block rounded-full w-14 h-14 my-0 mx-auto'
						alt='chat'
						src={`${avatar}`} />
					<div className="time mt-1 text-sm text-center opacity-70">{time}</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Avatar;