import React, {KeyboardEvent} from 'react';
import StarIcon from './star.svg';
import {RatingProps} from "./Rating.props";
import cs from './Rating.module.css';
import cn from "classnames";

const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
	const [ratingArray , setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

	React.useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={cn(cs.star, {
						[cs.filed]: i < currentRating,
						[cs.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
				>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
					/>
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if(!isEditable){
			return;
		}
		constructRating(i);
	};

	const onClick = (i: number) => {
		if(!isEditable || !setRating){
			return;
		}
		setRating(i);
	};

	const handleSpace = (i: number , e: KeyboardEvent<SVGAElement>) => {
		if(e.code != 'Space' || !setRating){
			return;
		}
		setRating(i);
	};

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
		</div>
	);
};

export default Rating;