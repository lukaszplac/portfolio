import React from 'react';
import styles from "./Contact.scss"

class Contact extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
		<div className={styles.container}>
			<div className={styles.contact}>
				<p>contact</p>
			</div>
		</div>
		)
	}
}

export default Contact;