import React, { Component } from 'react'
import TestA from './test';
export default class HomePage extends Component {
	constructor(props) {
	    super(props);
	    this.state = {date: new Date()};
	  }

	componentDidMount(){
		TestA.test();
		
		
	}
	render(){
		return (
			<div className="test fr">
				ssssg
				<div>
					sgwbqsss
				</div>
			</div>
		)
	}
}
