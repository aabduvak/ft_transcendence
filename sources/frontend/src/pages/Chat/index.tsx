import React from 'react';

import ChatRooms from './ChatRooms';
import SingleRoom from './SingleRoom';

const Chat = () => {
	return (
		<React.Fragment>
			<div className='chat px-8 py-24 bg-base-100'>
				<div className='container my-0 mx-auto'>
					<div className='grid grid-cols-3 gap-8'>
						<div className='col-span-1 bg-base-300 px-7 py-5 rounded-xl'>
							<ChatRooms />
						</div>

						<div className='col-span-2 bg-base-300 px-7 py-5 rounded-xl'>
							<SingleRoom />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Chat;