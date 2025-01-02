import React from 'react';
import { options } from '../options';
import { getServerSession } from 'next-auth/next';
import LogoutBTN from './LogoutBTN';
import LoginBTN from './LoginBTN';
import Link from 'next/link';

const Authentication = async () => {
	const session = await getServerSession(options);
	return (
		<div className="flex items-center">
			{session ? (
				<div className="flex justify-center items-center gap-3">
					<Link href={`/content/create`}>
						<button className="px-8 py-2 text-white text-sm font-medium bg-tertiary rounded-full  hover:bg-secondary">
							ADD NEW RECIPE
						</button>
					</Link>
					<p className="text-white">
						Welcome, {session.user?.name || 'User'}!
					</p>
					<LogoutBTN />
				</div>
			) : (
				<div>
					<LoginBTN />
				</div>
			)}
		</div>
	);
};

export default Authentication;
