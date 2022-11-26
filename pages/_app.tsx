import React from "react";
import Head from "next/head";
import type {AppProps} from 'next/app';
import '../styles/globals.css';

function App({Component, pageProps}: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>lepeshka25 - myTop</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default App;