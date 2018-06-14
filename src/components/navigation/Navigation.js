import React from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './Navigation.scss';
import * as Fa from 'react-icons/lib/fa'

class Navigation extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			naviToggle: true
		};
	}

	forceRerender() {
		this.setState({naviToggle: false});
		setTimeout(() => {
			this.setState({naviToggle: true});
		}, 500);
	}

	render() {
	let naviClass = this.state.naviToggle ? [styles.navi1, 'animated fadeInLeft'].join(' '): 
		styles.naviReset;
	console.log(naviClass);
	return(
		<div>
			<div className={naviClass}>
					<div class={styles.naviArrows}>
						<div className={styles.arrowContainer}>
							<Fa.FaAngleLeft className={styles.arrowLeft} size="25" />
						</div>
						<div className={styles.arrowContainer}>
							<Fa.FaAngleLeft className={styles.arrowLeft} size="25" />
						</div>
						<div className={styles.arrowContainer}>
							<Fa.FaAngleLeft className={styles.arrowLeft} size="25" />
						</div>
					</div>
					<div className={styles.links}>
						<ul>
							<li><span onClick={() => this.forceRerender()}><Link to={'/about'}>about</Link></span></li>
							<li><span onClick={() => this.forceRerender()}><Link to={'/portfolio'}>portfolio</Link></span></li>
							<li><span onClick={() => this.forceRerender()}><Link to={'/contact'}>contact</Link></span></li>
						</ul>
					</div>

				{/* <div className={styles.logo}>
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
				</div> */}
			</div>
		</div>
		)
	}
}

export default Navigation;
