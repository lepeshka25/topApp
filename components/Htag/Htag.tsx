import React from 'react';
import cs from './Htag.module.css';
import {HtagProps} from "./Htag.props";

const Htag = ({tag , children}: HtagProps): JSX.Element => {
	switch (tag){
		case "h1": {
			return <h1 className={cs.h1}>{children}</h1>;
		}
		case "h2": {
			return <h2 className={cs.h2}>{children}</h2>;
		}
		case "h3": {
			return <h3 className={cs.h3}>{children}</h3>;
		}
		default: {
			return <>{children}</>;
		}
	}
};

export default Htag;