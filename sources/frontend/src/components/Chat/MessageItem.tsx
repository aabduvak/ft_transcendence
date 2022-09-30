import React from "react";

import Avatar from "./Avatar";
import Content from "./Content";

export enum ownerData {
	receiver,
	sender
}

interface MessageDetails {
	avatar: string,
	message: string,
	time: string,
	owner: ownerData
}

const MessageItem = ({ avatar, message, time, owner }: MessageDetails) => {
	let data = (
		<React.Fragment>
			<div className="message-item grid grid-cols-8 mb-4 receiver">
				<Content message={message} className={`col-start-3 rounded-tr-none bg-secondary-content`} />
				<Avatar avatar={avatar} time={time} />
			</div>
		</React.Fragment>
	);

	if (owner == ownerData.sender) {
		data = (
			<React.Fragment>
				<div className={`message-item grid grid-cols-8 mb-4 sender`}>
					<Avatar avatar={avatar} time={time} />
					<Content message={message} className={`rounded-tl-none bg-primary-content`} />
				</div>
			</React.Fragment>
		);
	}

	return (data);
}

export default MessageItem;