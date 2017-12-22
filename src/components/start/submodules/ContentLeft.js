import React from 'react';
import styles from './ContentLeft.scss';

class ContentLeft extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			hidden: 'hidden'
		}
	}

	componentWillMount() {
		setTimeout(() => this.show(), this.props.wait);
	}

	show() {
		this.setState({hidden: ''});
	}

	render() {
		let whenVisibleStyle = '';
		switch(this.props.number) {
			case 0: whenVisibleStyle = styles.content0; break;
			case 1: whenVisibleStyle = styles.content1; break;
			case 2: whenVisibleStyle = styles.content2; break;
			case 3: whenVisibleStyle = styles.content3; break;
		}
		return(
			<div key={this.props.number} className={whenVisibleStyle}>
				<h3 className={this.state.hidden ? styles.hidden : 'animated '+ this.props.anim + ' ' + styles.notHidden}>{this.props.title}</h3> 
				<p className={this.state.hidden ? styles.hidden : 'animated ' + this.props.anim + ' ' + styles.notHidden}>{this.props.text}</p>
			</div>
			)
	}
}

export default ContentLeft;