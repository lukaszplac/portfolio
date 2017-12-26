import React from 'react';
import styles from "./Contact.scss";
import handshake from "../../../res/img/handshake.png";
import * as Fa from 'react-icons/lib/fa'


class Contact extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		let animateCssClass = 'animated zoomIn';
		return(
			<div className={styles.contact}>
				<div className={[styles.handshake, animateCssClass].join(' ')}>
					<img src={handshake}></img>
				</div>
				<div className={[styles.icons, animateCssClass].join(' ')}>
					<h1>Hire me! :)</h1>
					<button>Hire me!</button>
					<p>Or just follow me on:</p>
					<a href="http://www.facebook.com/lukaszplac123" target="_blank"><Fa.FaFacebookOfficial className={styles.icon} size='100'/></a>
					<a href="http://www.github.com/lukaszplac" target="_blank"><Fa.FaGithub className={styles.icon} size='100' /></a>
					<a href="http://www.linkedin.com/in/lukasz-plac" target="_blank"><Fa.FaLinkedin className={styles.icon} size='100' /></a>
				</div>
			</div>
		)
	}
}

export default Contact;
