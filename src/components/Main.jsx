import React from 'react';

const Main = ({ children }) => {
	return (
		// <main id="main" role="main">
		//     {children}
		// </main>
		<main id="main" role="main" className="main-background">
			{children}
			<figure className="overlay"></figure>
		</main>
	);
};

export default Main;
