import React from 'react';
import { getFunName } from '../helpers'

//jsx: only one parent tag
//must have self closed tag
//comment in JSX: {/*hello*/}
//and no comment in the top level
class StorePicker extends React.Component {
	render(){
		return (
			<form className="store-selector">
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
				<button type="submit">Visit Store -></button>
			</form>
		)
	}
}

export default StorePicker;