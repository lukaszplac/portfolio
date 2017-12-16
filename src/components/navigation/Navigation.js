import React from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './Navigation.scss';

class Navigation extends React.Component {
	
	render() {
		return (
		<div className={styles.navi}>
			<ul>
				<li><Link className={styles.link} to={'/about'}>about</Link></li>
				<li><Link className={styles.link} to={'/portfolio'}>portfolio</Link></li>
				<li><Link className={styles.link} to={'/contact'}>contact</Link></li>
			</ul>
		</div>
		);
	}
};

export default Navigation;