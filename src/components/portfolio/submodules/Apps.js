import React from 'react';
import styles from './Apps.scss';
import { StatefulToolTip } from "react-portal-tooltip"
import * as Fa from 'react-icons/lib/fa';
import bg from '../../../../res/img/app.jpg'

class Apps extends React.Component {

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

    let appsArrayParsedToDomElements = this.props.apps.map((item, i) => {
								let tooltipDiv = (<div className={styles.appContentContainer}>
																					 <a href={item.webLink} target="_blank"><Fa.FaEye size='32' /></a>
																					 <a href={item.sourceLink} target="_blank"><Fa.FaGithub size='32' /></a>
																  </div>);
								return (
									<div
										key={i+1122}
										className={styles.appContainer}>
										<img src={bg}></img>
										<StatefulToolTip position="top"
																		 arrow="center"
																		 parent={tooltipDiv}>
													<div className={styles.tooltip}>
														<h4 className={styles.tooltipTitle}>{item.title}</h4>
														<p className={styles.tooltipDescr}>{item.description}</p>
													</div>
										</StatefulToolTip>
									</div> )
						    });
		return(
			<div className={this.state.hidden ? styles.hidden : this.props.anim + ' ' + styles.notHidden}>
				{appsArrayParsedToDomElements}
			</div>
			)
	}
}

export default Apps;
