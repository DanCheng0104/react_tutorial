import React from 'react';
import { getFunName } from '../helpers'

//jsx: only one parent tag
//must have self closed tag
//comment in JSX: {/*hello*/}
//and no comment in the top level
//ref={(test)=>{this.storeInput=test}} pass dom to react component
class StorePicker extends React.Component {
	constructor(){
		super();
		this.goToStore = this.goToStore.bind(this);
	}
	//es6 doesnt have comma after it
	goToStore(event){
		//first grab the text from the box
		//route change
		event.preventDefault();
		console.log(this.storeInput.value);
		//use ref to reference the input
	}
	render(){
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(test)=>{this.storeInput=test}}/>
				<button type="submit">Visit Store -></button>
			</form>
		)
	}
}

export default StorePicker;