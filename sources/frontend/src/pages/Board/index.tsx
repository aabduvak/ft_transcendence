import React from 'react';

import { TableRow } from '../../components';

const LeaderBoard = () => {
	return (
		<React.Fragment>
			<div className='leader-board px-8 py-24 bg-base-100'>
				<div className='container my-0 mx-auto'>
					<h3 className='text-white text-4xl font-bold text-center mb-4'>Leader Board</h3>
					<p className='text-center'>Dummy text is also used to demonstrate the appearance of different typefaces and layouts</p>
					<div className='overflow-x-auto w-full mt-8'>
						<table className='table table-zebra w-full'>
							<thead>
								<tr>
									<th>Rank</th>
									<th>Name</th>
									<th>Played Games</th>
									<th>Level</th>
									<th>Profile</th>
								</tr>
							</thead>
							<tbody>
								<TableRow 
									avatar={'https://avatars.githubusercontent.com/u/64299663?v=4'}
									country={'Türkiye'} 
									level={112}
									name={'Abdulaziz Abduvakhobov'}
									link={'/profile'}
									played={243}
									rank={1}
									rate={78}
								/>
								
								<TableRow 
									avatar={'https://daisyui.com/tailwind-css-component-profile-1@56w.png'}
									country={'USA'} 
									level={110}
									name={'Brice Swyre'}
									link={'/profile/'}
									played={227}
									rank={2}
									rate={64}
								/>
								
								<TableRow 
									avatar={'https://daisyui.com/tailwind-css-component-profile-3@56w.png'}
									country={'France'} 	
									level={108}
									name={'Marjy Ferencz'}
									link={'/profile/'}
									played={187}
									rank={3}
									rate={74}
								/>
								
								<TableRow 
									avatar={'https://daisyui.com/tailwind-css-component-profile-2@56w.png'}
									country={'USA'} 	
									level={105}
									name={'Hart Hagerty'}
									link={'/profile/'}
									played={162}
									rank={4}
									rate={67}
								/>
								
								<TableRow 
									avatar={'https://daisyui.com/tailwind-css-component-profile-5@56w.png'}
									country={'Brazil'} 	
									level={104}
									name={'Yancy Tear'}
									link={'/profile/'}
									played={155}
									rank={5}
									rate={80}
								/>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default LeaderBoard;