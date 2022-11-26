import React from 'react';
import {SidebarProps} from "./Sidebar.props";
import cs from './Sidebar.module.css'

const Sidebar = ({...props}: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			Sidebar
		</div>
	);
};

export default Sidebar;