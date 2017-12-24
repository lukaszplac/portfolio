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
		let viewWidth = document.documentElement.clientWidth;
		let animateCssClassAboutText = '';
		let animateCssClassImage = '';
		let animateCssParagraphs = '';
		if (viewWidth >= 753) {
			animateCssClassAboutText = "animated fadeInLeft";
			animateCssClassImage = "animated fadeInRight";
			animateCssParagraphs = 'zoomIn'
		}
		let contentArrayLeft = Object.values(contentJson.contentLeft);
		let contentParsedToDomElementsLeft = contentArrayLeft.map((item, i) =>
					(<PanelLeft key={i} number={i} {...item} anim={animateCssParagraphs}/>)
			);
		return(
			<div className={styles.about}>
				<div className={[styles.aboutText, animateCssClassAboutText].join(' ')}>
					{contentParsedToDomElementsLeft}
				</div>
				<div className={[styles.aboutImage, animateCssClassImage].join(' ')}>
					<PanelRight wait={800}/>
				</div>
			</div>
		)
	}
}

export default About;
