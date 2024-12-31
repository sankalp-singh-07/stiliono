import { dateFormat } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Author, Recipe } from '@/sanity/types';

export type ItemCardType = Omit<Recipe, 'author'> & { author?: Author };

const ItemCard = ({ post }: { post: ItemCardType }) => {
	const {
		_createdAt,
		views,
		author,
		title,
		category,
		_id,
		image,
		description,
	} = post;

	return (
		<li className="item-card group">
			<div className="flex justify-between">
				<p className="item-card_date">{dateFormat(_createdAt)}</p>
				<div className="flex gap-1">
					<EyeIcon className="size-6 text-primary" />
					<span className="font-medium text-[16px] text-black">
						{views}
					</span>
				</div>
			</div>

			<div className="flex justify-between mt-5 gap-5">
				<div className="flex-1">
					<Link href={`/user/${author?._id}`}>
						<p className="font-medium text-[16px] text-black line-clamp-1">
							{author?.name}
						</p>
					</Link>
					<Link href={`/content/${_id}`}>
						<h3 className="font-semibold text-[26px] text-black line-clamp-1">
							{title}
						</h3>
					</Link>
				</div>
				<Link href={`/user/${author?._id}`}>
					<img
						src={author?.image!}
						alt={author?.name!}
						className="rounded-full w-[48px] h-[48px]"
					/>
				</Link>
			</div>

			<Link href={`/content/${_id}`}>
				<p className="item-card_desc">{description}</p>

				<img src={image} alt="placeholder" className="item-card_img" />
			</Link>

			<div className="flex justify-between gap-3 mt-5">
				<Link href={`/?query=${category?.toLowerCase()}`}>
					<p className="font-medium text-[16px] text-black">
						{category}
					</p>
				</Link>
				<Button className="item-card_btn" asChild>
					<Link href={`/content/${_id}`}>Details</Link>
				</Button>
			</div>
		</li>
	);
};

export default ItemCard;
