import React from "react";

interface ContentDetails {
	message: string,
	className: string
}

const Content = ({message, className}: ContentDetails) => {
	return (
		<React.Fragment>
			<div className={`col-span-5 py-6 px-4 rounded-2xl ${className}`}>
				<div className="message-content">
					{message}
				</div>
			</div>
		</React.Fragment>
	);
}

export default Content;