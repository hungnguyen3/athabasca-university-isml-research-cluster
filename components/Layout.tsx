import React from 'react';
import Head from 'next/Head';

interface LayoutProps {
	title: string;
	children: JSX.Element[] | JSX.Element;
}

export const Layout = (props: LayoutProps) => {
	return (
		<div className="bg-gray-300">
			<Head>
				<title>{props.title}</title>
				<link rel="icon" href="/favicon.ico"></link>
			</Head>
			<main className="container mx-auto max-w-xl pt-8 min-h-screen">
				{props.children}
			</main>
		</div>
	);
};
