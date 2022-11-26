import React from 'react';
import cn from 'classnames';
import {PProps} from "./P.props";
import cs from './P.module.css';

const P = ({fontSize , children, ...props}: PProps): JSX.Element => {
	return (
		<p
			className={cn(cs.p , {
				[cs.p14]: fontSize == '14',
				[cs.p16]: fontSize == '16',
				[cs.p18]: fontSize == '18',
			})}
			{...props}
		>
			{children}
		</p>
	);
};

export default P;