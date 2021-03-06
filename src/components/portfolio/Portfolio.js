import React from 'react';
import styles from "./Portfolio.scss";
import AppsHeader from './submodules/AppsHeader';
import Apps from './submodules/Apps';
import contentJson from './content.json';

class Portfolio extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		let contentApps = Object.values(contentJson.contentLeft);
		let contentAppsParsedToDomElements = contentApps.map((item, i) =>
					(<div key={i+5442} className={styles.portfolio}>
						 <div key={i+445} className={styles.header}>
						 	<AppsHeader key={i+123} title={item.title} anim="animated lightSpeedIn" wait={item.wait}/>
						 </div>
						 <div key={i+644} className={styles.app}>
						 	<Apps key={i+124} apps={item.apps} anim="animated fadeInLeftBig" wait={item.wait + 200}/>
						 </div>
					 </div>
					)
			);
		return(
			<div>
					{contentAppsParsedToDomElements}
			</div>
		)
	}
}

export default Portfolio;
