import React from 'react';
import {ButtonProps} from "./Button.props";
import ArrowIcon from './arrow.svg';
import cn from 'classnames';
import cs from './Button.module.css';

const Button = ({appearance, arrow = 'none' , children, ...props}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(cs.button , {
				[cs.primary]: appearance == 'primary',
				[cs.ghost]: appearance == 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && <span className={cn(cs.arrow, {
				[cs.down]: arrow === "down",
				[cs.down]: arrow === "down",
			})}>
				<ArrowIcon/>
			</span>}
		</button>
	);
};

export default Button;