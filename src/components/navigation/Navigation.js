import React from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './Navigation.scss';
import * as Fa from 'react-icons/lib/fa'

class Navigation extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
	return(
		<div>
			<div className={[styles.navi, 'animated fadeInLeft'].join(' ')}>
				<div className={styles.logo}>
					<h3><Link className={styles.link} to={'/'}>{"<code/>"}</Link></h3>
				</div>
				<div className={styles.links}>
					<ul>
						<li><Link className={styles.link} to={'/about'}>about</Link></li>
						<li><Link className={styles.link} to={'/portfolio'}>portfolio</Link></li>
						<li><Link className={styles.link} to={'/contact'}>contact</Link></li>
					</ul>
				</div>
				<div className={styles.contacts}>
					<a href="http://www.facebook.com/lukaszplac123" target="_blank"><Fa.FaFacebookOfficial className={styles.icon} size='25'/></a>
					<a href="http://www.github.com/lukaszplac" target="_blank"><Fa.FaGithub className={styles.icon} size='25' /></a>
					<a href="http://www.linkedin.com/in/lukasz-plac" target="_blank"><Fa.FaLinkedin className={styles.icon} size='25' /></a>
				</div>
			</div>
		</div>
		)
	}
}

export default Navigation;
