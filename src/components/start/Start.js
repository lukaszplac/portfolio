import React from 'react';
import styles from './Start.scss';
import me from '../../../res/img/me-blured.jpg';
 
export const Start = props => (
	<div className={styles.start}>
		<h1>Yeah!. That`s me</h1>
		<div className={styles.image}>
			<img className={'animated zoomInDown'} src={me}></img>
		</div>
	</div>
);

export default Start