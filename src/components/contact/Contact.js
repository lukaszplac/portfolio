import React from 'react';
import styles from "./Contact.scss";
import handshake from "../../../res/img/handshake.png";
import * as Fa from 'react-icons/lib/fa'


class Contact extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		let animateCssClass = 'animated slideInLeft';
		let animateCssClassIcons = 'animated slideInDown';
		return(
			<div className={styles.contact}>
				<div className={[styles.handshake, animateCssClass].join(' ')}>
					<img src={handshake}></img>
				</div>
				<div className={[styles.icons, animateCssClassIcons].join(' ')}>
					<h1 className={'animated fadeInDown'}>Hire me! :)</h1>
					<a href="mailto:lukasz.plac@gmail.com?Subject=I%20want%20to%20cooperate%20with%20you%20Mr.%20Plac"><button>Hire me!</button></a>
					<p className={'animated fadeInDown'}>Or just follow me on:</p>
					<a href="http://www.facebook.com/lukaszplac123" target="_blank"><Fa.FaFacebookOfficial className={styles.icon} size='100'/></a>
					<a href="http://www.github.com/lukaszplac" target="_blank"><Fa.FaGithub className={styles.icon} size='100' /></a>
					<a href="http://www.linkedin.com/in/lukasz-plac" target="_blank"><Fa.FaLinkedin className={styles.icon} size='100' /></a>
					<h5 className={'animated fadeInDown'}>phone: +48 668 029 848</h5>
				</div>
			</div>
		)
	}
}

export default Contact;
