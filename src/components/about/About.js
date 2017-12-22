import React from 'react';
import styles from "./About.scss";
import PanelRight from './submodules/PanelRight';
import PanelLeft from './submodules/PanelLeft';
import contentJson from './content.json';

class About extends React.Component {
	
	constructor(props){
		super(props);
	}

	render() {
		let contentArrayLeft = Object.values(contentJson.contentLeft);
		let contentParsedToDomElementsLeft = contentArrayLeft.map((item, i) => 
					(<PanelLeft key={i} number={i} {...item} anim="zoomIn"/>)
			);
		return(
			<div className={styles.about}>
				<div className={'animated fadeInLeft ' + styles.aboutText}>
					{contentParsedToDomElementsLeft}
				</div>
				<div className={'animated fadeInRight ' + styles.aboutImage}>
					<PanelRight wait={800}/>
				</div>
			</div>
		)
	}
}

export default About;