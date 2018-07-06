import React, { Component } from 'react'
export default class DefaultLayout extends Component {
	componentDidMount(){
	}
	render(){
		return (
			<div className="layoutWrap">
				{this.props.children}
			</div>
		)
	}
}
