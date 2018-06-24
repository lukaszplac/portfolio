import React, { Component } from 'react';
import Card from '../helpers/Card';
import contentJson from './content.json';
import styles from './About.scss';
import AboutContent from './submodules/AboutContent';
import Header from '../helpers/Header';

class About extends Component {

	constructor(props) {
		super(props);
	};
	
	render() {
		let colors = ["#ffa372", "#9fff72"];
		let pics = [["me-about22.jpg"],
					 ["me-rounded.png"]];
		let cardSet = contentJson.content.map((card,i) => <Card key={i} 
																offset={(i+1)*10}
																background={{color: colors[i]}}
																zIndex={-100-(i*2)}
																delay={""+0.2*(i+1)+"s"}
																direction={"row"}>
															<AboutContent
																heading={card.heading}
																text={card.text}
																fontChangable={card.fontChangable ? true : false}
																picsSet={pics[i]}/>
														  </Card>)
		return(
			<div className={styles.about}>
				{cardSet}
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