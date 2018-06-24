import React from 'react';
import styles from './Start.scss';
import contentJson from './content.json';
import StartContent from './submodules/StartContent';
import Card from '../helpers/Card';
import Header from '../helpers/Header';

class Start extends React.Component {

	constructor(props) {
		super(props);

	}
	
	render() {
		let colors = ["#9fff72", "#72c9ff", "#ffa372"];
		let icons = [["html5.png", "css.png", "sass.png", "react.png"],
					 ["coder-head.png", "javascript.png"],
					 ["wordpress.png", "cms.png"]]
		let cardSet = contentJson.content.map((card,i) => <Card key={i} 
																offset={(i+1)*10}
																background={{color: colors[i]}}
																zIndex={-100-(i*2)}
																delay={""+0.2*(i+1)+"s"}
																direction="column">
														<StartContent
															heading={card.heading}
															text={card.text}
															iconSet={icons[i]}/>
													</Card>)
		return (
					<div className={styles.start}>
							{cardSet}
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



//old render method
// render() {
// 	let contentArrayLeft = Object.values(contentJson.contentLeft);
// 	let contentArrayRight = Object.values(contentJson.contentRight);
// 	let contentParsedToDomElementsLeft = contentArrayLeft.map((item, i) =>
// 				(<ContentLeft key={i} number={i} {...item} anim="fadeInLeft"/>)
// 		);
// 	let contentParsedToDomElementsRight = contentArrayRight.map((item, i) =>
// 				(<ContentRight key={i} number={i} {...item} anim="fadeInRight"/>)
// 		);
// 	return(
// 		<div className={styles.parent}>
// 			<div className={styles.start}>
// 				<div className={'animated fadeInLeft ' + styles.info}>
// 					{contentParsedToDomElementsLeft}
// 				</div>
// 				<div className={'animated flip ' + styles.image}>
// 					<img src={me}></img>
// 				</div>
// 				<div className={'animated fadeInRight ' + styles.info}>
// 					{contentParsedToDomElementsRight}
// 				</div>
// 			</div>
// 		</div>
// 		)
// }

export default Start;
