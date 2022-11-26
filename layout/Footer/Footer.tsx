import React from 'react';
import {FooterProps} from "./Footer.props";
import cs from './Footer.module.css'

const Footer = ({...props}: FooterProps): JSX.Element => {
	return (
		<div {...props}>
			Footer
		</div>
	);
};

export default Footer;