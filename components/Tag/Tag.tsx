import React from 'react';
import cn from 'classnames';
import {TagProps} from "./Tag.props";
import cs from './Tag.module.css';

const Tag = ({size , children, href, color, ...props}: TagProps): JSX.Element => {
	return (
		<div
			className={cn(cs.tag , {
				[cs.s]: size == 's',
				[cs.m]: size == 'm',
				[cs.red]: color == 'red',
				[cs.green]: color == 'green',
				[cs.primary]: color == 'primary',
				[cs.grey]: color == 'grey',
				[cs.ghost]: color == 'ghost',
			})}
			{...props}
		>
			{
				href
					?	<a href={href}>{children}</a>
					: <>{children}</>
			}
		</div>
	);
};

export default Tag;