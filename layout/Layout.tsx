import React, {FunctionComponent} from 'react';
import {LayoutProps} from "./Layout.props";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import cs from './Layout.module.css';

const Layout = ({children}: LayoutProps): JSX.Element => {
	return (
		<div className={cs.wrapper}>
			<Header className={cs.header}/>
			<Sidebar className={cs.sidebar}/>
			<div className={cs.body}>
				{children}
			</div>
			<Footer className={cs.footer}/>
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props}/>
			</Layout>
		);
	};
};