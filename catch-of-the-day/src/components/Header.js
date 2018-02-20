import React from 'react';

//stateless functions
const Header = (props) =>{
	return (
		<header className="top">
			<h1>Catch 
			<span className="ofThe">
				<span className="of">of</span>
				<span class="the">tge</span>
			</span>
			Day
			</h1>
			<h3 className="tagline"><span>{props.tagline}</span></h3>
		</header>
	)	
}


	


export default Header;