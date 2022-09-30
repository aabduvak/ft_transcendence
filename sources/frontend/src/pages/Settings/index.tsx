import React from 'react';

const Settings = () => {
	return (
		<React.Fragment>
			<div className="profile px-8 py-24 bg-base-100">
				<div className="container my-0 mx-auto">
					<div className="grid grid-cols-3 gap-8">
						<div className="col-span-1 bg-base-300 px-7 py-5 rounded-xl">
							<div className="flex flex-col items-center space-x-3 text-center">
								<div className="avatar">
									<div className={`mask mask-squircle w-24 h-24 avatar`}>
										<img src={`https://avatars.githubusercontent.com/u/64299663?v=4`} alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div className="font-bold mt-4">Abdulaziz Abduvakhobov</div>
								</div>

							</div>
						</div>

						<div className="col-span-2 px-7 py-5 rounded-xl">
							<form className="flex flex-col">

								<div className="form-control">
									<label className="input-group">
										<span>Name</span>
										<input type="text" value="Abdulaziz Abduvakhobov" className="input input-bordered border-l-0 w-full" />
									</label>
								</div>

								<div className="divider"></div>

								<div className="form-control">
									<label className="input-group">
										<span>Email</span>
										<input type="email" value="abdulaziz.yosk@gmail.com" className="input input-bordered border-l-0 w-full" />
									</label>
								</div>


								<div className="divider"></div>

								<div className="form-control">
									<label className="input-group">
										<span>Username</span>
										<input type="text" value="aabduvak" className="input input-bordered border-l-0 w-full" />
									</label>
								</div>

								<div className="divider"></div>

								<div className="flex">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer rounded-md py-2 px-4 bg-base-300"
									>
										<span>Upload a file</span>
										<input id="file-upload" name="file-upload" type="file" className="sr-only" accept='png'/>
									</label>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Settings;