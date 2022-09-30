import React from "react";

interface ChatItemDetails {
	avatar: string,
	name: string,
	message: string,
	time: string,
	isOnline: boolean
}

const ChatItem = ({avatar, name, message, time, isOnline=false}: ChatItemDetails) => {
	let status = 'offline';
	
	if (isOnline)
		status = 'online';
	
	return (
		<React.Fragment>
			<div className='chat-item cursor-pointer grid grid-cols-5'>
				<div className={`col-span-1 avatar w-14 h-14 ${status}`}>
					<img 
						className='avatar inline-block rounded-full' 
						alt='chat' 
						src={`${avatar}`} />
				</div>
				<div className='col-span-3 chat-description'>
					<div className='title'>
						<h3 className='font-bold'>{name}</h3>
					</div>
					<div className='message mt-1'>
						<p className='font-light text-sm'>
							{message}
						</p>
					</div>
				</div>
				<div className='col-span-1 chat-time'>
					<div className='font-bold text-right'>
						{time}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ChatItem;