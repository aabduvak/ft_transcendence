import React from 'react';

import ChatRooms from './ChatRooms';
import SingleRoom from './SingleRoom';

import './style.css';

const Chat = () => {
	return (
		<React.Fragment>
			<div className='chat px-8 pt-24 bg-base-100 h-screen'>
				<div className='container my-0 mx-auto'>
					<div className='grid grid-cols-3 gap-8 h-3/5'>
						<div className='col-span-1 bg-base-300 px-7 py-5 rounded-xl h-3/5'>
							<ChatRooms />
						</div>

						<div className='col-span-2 bg-base-300 px-7 py-5 rounded-xl h-3/5'>
							<SingleRoom />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Chat;