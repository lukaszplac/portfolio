import React from 'react';
import styles from './Paragraph.scss';

class Paragraph extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			hidden: 'hidden'
		}
	}

	componentDidMount() {
		setTimeout(() => this.show(), this.props.wait);
	}

	show() {
		this.setState({hidden: ''});
	}

	render() {
		return(
			<p className={this.state.hidden ? styles.hidden : styles.notHidden + ' ' + this.props.anim}>{this.props.text}</p>
			)
	}
}

export default Paragraph;