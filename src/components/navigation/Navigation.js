import React from 'react';
import { Link } from 'react-router-dom';
import MobileNavigation from './MobileNavigation';
import styles from './Navigation.scss';
import * as Fa from 'react-icons/lib/fa'

class Navigation extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			naviToggle: true,
			mobileNav: false,
			onDeactivate: false,
		};
	}

	forceRerender() {
		this.setState({naviToggle: false, mobileNav: false});
		setTimeout(() => {
			this.setState({naviToggle: true});
		}, 600);
	}

	acticateMobileNav() {
		this.setState({mobileNav: true})
	}

	deactivateMobileNav() {
		this.setState({onDeactivate: true});
		setTimeout(() => {
			this.setState({mobileNav: false, onDeactivate: false});
		}, 500);
	}

	render() {
	let naviClass = this.state.naviToggle ? [styles.navi1, 'animated fadeInLeft'].join(' '): 
		styles.naviReset;
	let displayBurger = this.state.mobileNav ? "none" : "flex";
	return(
		<div>
			<div style={{display: displayBurger}} className={styles.mediaIcon} onClick={this.acticateMobileNav.bind(this)}>
				<div></div>
				<div></div>
				<div></div>
			</div>
				<MobileNavigation activate={this.state.mobileNav} 
								  deactivate={this.deactivateMobileNav.bind(this)}
								  forceRerender={this.forceRerender.bind(this)}
								  onDeactivate={this.state.onDeactivate}/>
				{!this.state.mobileNav ? <div className={naviClass}>
											<div className={styles.links}>
												<ul>
													<li><span onClick={() => this.forceRerender()}><Link to={'/'}>{"<home/>"}</Link></span></li>
													<li><span onClick={() => this.forceRerender()}><Link to={'/about'}>about</Link></span></li>
													<li><span onClick={() => this.forceRerender()}><Link to={'/portfolio'}>portfolio</Link></span></li>
													<li><span onClick={() => this.forceRerender()}><Link to={'/contact'}>contact</Link></span></li>
												</ul>
											</div>
											<div className={styles.social}>
												<div className={styles.socialIcon}><a href="http://www.facebook.com/lukaszplac123" target="_blank"><Fa.FaFacebook size={50} /></a></div>
												<div className={styles.socialIcon}><a href="http://www.github.com/lukaszplac" target="_blank"><Fa.FaGithub size={50} /></a></div>
												<div className={styles.socialIcon}><a href="http://www.linkedin.com/in/lukasz-plac" target="_blank"><Fa.FaLinkedin size={50} /></a></div>
												<p>social</p>
												<div className={styles.mask}></div>
											</div>
											<div className={styles.naviArrows}>
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
										</div> : null}
		</div>
		)
	}
}

export default Navigation;
