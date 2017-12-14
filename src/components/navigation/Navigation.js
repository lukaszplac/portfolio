import React from 'react';
import { Link } from 'react-router';
import styles from './Navigation.scss'

const Navigation = props => (
	<div className={styles.navi}>
		<ul>
			<li><Link className={styles.link} to="/about">about</Link></li>
			<li><Link className={styles.link} to="/portfolio">portfolio</Link></li>
			<li><Link className={styles.link} to="/contact">contact</Link></li>
		</ul>
		{props.children}
	</div>
);

export default Navigation;