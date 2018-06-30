import React, { Component } from 'react';
import Card from '../helpers/Card';
import contentJson from './content.json';
import styles from './About.scss';
import AboutContent from './submodules/AboutContent';
import Header from '../helpers/Header';
import CardWrapper from '../helpers/CardWrapper';

class About extends Component {

	constructor(props) {
		super(props);
	};
	
	render() {
		let colors = ["#ffa372", "#9fff72"];
		let pics = [["me-about22.jpg"], ["me-rounded.png"]];
		return(
			<div className={styles.about}>
				<CardWrapper colors={colors} 
							 icons={pics} 
						     contentJson={contentJson}
							 elementContent={AboutContent}/>
				<div className={styles.aboutHeader}>
								<Header welcome="You think you know me?"
										headerMain="Well, you don`t"
										headerSub="If you like to find out"
										text="Tabs will reveal more about me"/>
				</div>
			</div>
		);
	};
};

export default About;