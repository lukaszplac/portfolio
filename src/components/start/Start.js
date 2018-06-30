import React from 'react';
import styles from './Start.scss';
import StartContent from './submodules/StartContent';
import Card from '../helpers/Card';
import Header from '../helpers/Header';
import CardWrapper from '../helpers/CardWrapper';
import contentJson from './content.json';

class Start extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
        let colors = ["#9fff72", "#72c9ff", "#ffa372"];
		let icons = [["html5.png", "css.png", "sass.png", "react.png"],
					 ["coder-head.png", "javascript.png"],
					 ["wordpress.png", "cms.png"]]
		return (
					<div className={styles.start}>
							<CardWrapper colors={colors} 
										 icons={icons} 
										 contentJson={contentJson}
										 elementContent={StartContent}/>
							<div className={styles.startHeader}>
								<Header welcome="Hi, my name is Łukasz"
										headerMain="What Can I Do?"
										headerSub="Well, pretty much."
										text="Just explore tabs to find out more!"/>
							</div>
					</div>
		);
	}
}

export default Start;
