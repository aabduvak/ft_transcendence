import React from "react";
import { ChatItem } from "../../components";

const ChatRooms = () => {
	return (
		<React.Fragment>
				<ChatItem
					avatar='https://avatars.githubusercontent.com/u/64299663?v=4'
					name='Abdulaziz Abduvakhobov'
					message='Hi there! How are you?'
					time='09:30'
					isOnline={true}
				/>

				<div className='divider'></div>

				<ChatItem
					avatar='https://daisyui.com/tailwind-css-component-profile-1@56w.png'
					name='Brice Swyre'
					message='Hey Babe👋'
					time='08:24'
					isOnline={false}
				/>

				<div className="divider"></div>

				<ChatItem
					avatar='https://daisyui.com/tailwind-css-component-profile-3@56w.png'
					name='Marjy Ferencz'
					message='Wanna play tonight?😈'
					time='07:48'
					isOnline={false}
				/>

				<div className="divider"></div>

				<ChatItem
					avatar='https://daisyui.com/tailwind-css-component-profile-2@56w.png'
					name='Hart Hagerty'
					message='💋💋💋'
					time='04:13'
					isOnline={true}
				/>

				<div className="divider"></div>

				<ChatItem
					avatar='https://daisyui.com/tailwind-css-component-profile-5@56w.png'
					name='Yancy Tear'
					message='you son of bitch🤬🤬 I will f...'
					time='03:42'
					isOnline={false}
				/>
				
		</React.Fragment>
	);
}

export default ChatRooms;