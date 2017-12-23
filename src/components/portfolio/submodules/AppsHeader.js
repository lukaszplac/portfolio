import React from 'react';
import styles from './AppsHeader.scss';

class AppsHeader extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			hidden: 'hidden'
		}
	}

	componentDidMount() {
		setTimeout(() => this.unhide(), this.props.wait);
	}

	unhide() {
		this.setState({hidden: ''});
	}

	render() {
		return(
				<h3 className={this.state.hidden ? styles.hidden : this.props.anim + ' ' + styles.notHidden}>{this.props.title}</h3>
			)
	}
}

export default AppsHeader;
