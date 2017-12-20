import React from 'react';
import styles from './ContentRight.scss';

class ContentRight extends React.Component {
	
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
		let style = '';
		switch(this.props.number) {
			case 0: style = styles.content0; break;
			case 1: style = styles.content1; break;
			case 2: style = styles.content2; break;
			case 3: style = styles.content3; break;
		}
		return(
			<div key={this.props.number} className={style}>
				<h2 className={this.state.hidden ? styles.hidden : 'animated '+ this.props.anim + ' ' + styles.notHidden}>{this.props.title}</h2> 
				<p className={this.state.hidden ? styles.hidden : 'animated fadeInLeft ' + this.props.anim + ' ' + styles.notHidden}>{this.props.text}</p>
			</div>
			)
	}
}

export default ContentRight;