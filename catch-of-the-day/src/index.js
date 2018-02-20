// let's go!
import React from 'react';
//just need render method
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss} from 'react-router';
import './css/style.css';

import StorePicker from './components/StorePicker'
import App from './components/App'
import NotFound from './components/NotFound'


//context is more like global variable
const Root =() =>{
	return (
		<BrowserRouter>
		  <div>
			<Match exactly pattern="/" component={StorePicker} />
			<Match exactly pattern="/store/:storeId" component={App} />
			<Miss component={NotFound}/>
		  </div>
		</BrowserRouter>	

	)
}

// in this way you pass the router to the child storePicker component
StorePicker.contextTypes = {
	router: React.PropTypes.object
}

render(<Root/>,document.querySelector('#main'));
