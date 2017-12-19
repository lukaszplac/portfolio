import React from 'react';
import styles from "./About.scss"

class About extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return(
		<div className={styles.about}>
			<p>about</p>
		</div>
		)
	}
}

export default About;