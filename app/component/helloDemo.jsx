import React, { Component } from 'react'
import TestModal from './testModal';
export default class HomePage extends Component {
	constructor(props) {
	    super(props);
	    this.state = {date: new Date()};
	}
	componentDidMount(){
	
	
	}

	render(){
        return (
			<div>
				sss	wgeg ksgws是是sss
				<TestModal />
			</div>
		)
	}
}
