import React from 'react';
import styles from './Start.scss';
import me from '../../../res/img/me-rounded.png';
import ContentLeft from './submodules/ContentLeft';
import ContentRight from './submodules/ContentRight';
import contentJson from './content.json';
 
class Start extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {
		let contentArrayLeft = Object.values(contentJson.contentLeft);
		let contentArrayRight = Object.values(contentJson.contentRight);
		let contentParsedToDomElementsLeft = contentArrayLeft.map((item, i) => 
					(<ContentLeft key={i} number={i} {...item} anim="fadeInLeft"/>)
			);
		let contentParsedToDomElementsRight = contentArrayRight.map((item, i) => 
					(<ContentRight key={i} number={i} {...item} anim="fadeInRight"/>)
			);
		return(
			
			<div className={styles.start}>
				<div className={'animated fadeInLeft ' + styles.info}>
					{contentParsedToDomElementsLeft}
				</div>
				<div className={'animated fadeInUp ' + styles.image}>
					<img src={me}></img>
				</div>
				<div className={'animated fadeInRight ' + styles.info}>
					{contentParsedToDomElementsRight}
				</div>
			</div>
			)
	}
}

export default Start;