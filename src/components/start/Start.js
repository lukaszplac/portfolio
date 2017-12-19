import React from 'react';
import styles from './Start.scss';
import me from '../../../res/img/me-blured.jpg';
 
class Start extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className={styles.start}>
				<h1>Yeah!. That`s me</h1>
				<div className={styles.image}>
					<img src={me}></img>
				</div>
			</div>
			)
	}
}

export default Start