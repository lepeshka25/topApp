import React from 'react';
import {FooterProps} from "./Footer.props";
import cn from 'classnames';
import {format} from 'date-fns';
import cs from './Footer.module.css';

const Footer = ({className,...props}: FooterProps): JSX.Element => {
	return (
		<div
			className={cn(className, cs.footer)}
			{...props}
		>
			<div>
				OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
			</div>
			<a href='#'>
				Пользовательское соглашение
			</a>
			<a href='#'>
				Политика конфиденциальности
			</a>
		</div>
	);
};

export default Footer;


// <p className={cs.text1}>OwlTop © 2020 - 2021 Все права защищены</p>
// <p className={cs.text2}>Пользовательское соглашение</p>
// <p className={cs.text3}>Политика конфиденциальности</p>