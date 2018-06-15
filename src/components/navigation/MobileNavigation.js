import React from 'react';
import styles from './MobileNavigation.scss';
import { Link } from 'react-router-dom';

const mobileNavigation = (props) => {
    let onDeactivate  = props.onDeactivate ? "animated fadeOutLeft" : "";
    let onToggleBackdrop = props.onDeactivate ? styles.backdropDeactivate : "";
    let mobileNav = props.activate ? 
                    <div className={styles.container}>
                        <div className={[styles.mobile, "animated fadeInLeft", onDeactivate].join(' ')}>
                            <div className={styles.links}>
                                <ul>
                                    <li><span onClick={() => props.forceRerender()}><Link to={'/'}>{"<home/>"}</Link></span></li>
                                    <li><span onClick={() => props.forceRerender()}><Link to={'/about'}>about</Link></span></li>
                                    <li><span onClick={() => props.forceRerender()}><Link to={'/portfolio'}>portfolio</Link></span></li>
                                    <li><span onClick={() => props.forceRerender()}><Link to={'/contact'}>contact</Link></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className={[styles.backdrop, onToggleBackdrop].join(' ')} onClick={() => props.deactivate()}></div>
                    </div> : null;
    return mobileNav;
}

export default mobileNavigation;