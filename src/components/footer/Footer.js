import React from 'react';
import classes from './css/Footer.module.css';
import {ReactComponent as Logo} from "../../media/header/logo.svg";
import {ReactComponent as Instagram} from "../../media/footer/instagram.svg";
import {ReactComponent as Facebook} from "../../media/footer/facebook.svg";
import {ReactComponent as Twitter} from "../../media/footer/twitter.svg";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.top}>
                <div className={classes.left}>
                    <Logo/>
                    <div className={classes.logoInfo}>
                        <h4>CUstom caps</h4><p>Магазин кепок</p>
                    </div>
                </div>
                <div className={classes.right}>
                    <a href=""><Instagram style={{width: 12, height: 12}}/></a>
                    <a href=""><Facebook style={{width: 7, height: 12}}/></a>
                    <a href=""><Twitter style={{width: 12, height: 10}}/></a>
                </div>
            </div>
            <div className={classes.bottom}></div>
        </div>
    );
};

export default Footer;