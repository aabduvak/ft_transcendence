import React from "react";

import { MessageItem, ownerData } from "../../components";

const SingleRoom = () => {
	return (
		<div className="chat-room relative h-full">
			<MessageItem 
				avatar="https://avatars.githubusercontent.com/u/64299663?v=4" 
				time="09:25" 
				message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} 
				owner={ownerData.sender} 
			/>
			
			<MessageItem 
				avatar="http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg" 
				time="09:27" 
				message={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} 
				owner={ownerData.receiver} 
			/>
			
			<MessageItem 
				avatar="https://avatars.githubusercontent.com/u/64299663?v=4" 
				time="09:30" 
				message={"Hi there! How are you?"} 
				owner={ownerData.sender} 
			/>
			
			<div className="form absolute bottom-0 w-full">
				<input type="text" placeholder="Type here" className="input input-bordered w-full" />
			</div>
		</div>
	);
}

export default SingleRoom;