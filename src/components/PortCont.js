import React, { Component } from 'react';
import Header from './Header';
import Summary from './Summary';
import ContactInfo from './ContactInfo';

class PortCont extends Component {
	render(){
		return (
			<div className="portfolio-content">
				<Header />
				<Summary />
				<ContactInfo />
			</div>
		);
	}
}

export default PortCont;