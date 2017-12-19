import React from 'react';
import styles from "./Portfolio.scss"

class Portfolio extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
	return(
		<div className={styles.portfolio}>
			<p>portfolio</p>
		</div>
		
		)
	}
}

export default Portfolio;

