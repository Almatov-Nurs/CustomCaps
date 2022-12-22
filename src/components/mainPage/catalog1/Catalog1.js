import React from 'react';
import classes from './css/catalog.module.css'
import cap from  './img/cap.png'
import capDown from  './img/capDown.png'
import capUp from  './img/capUp.png'
import circle from  './img/circle.png'
import redCircle from  './img/redCircle.png'
import circleFull from  './img/circleFull.png'
import left from  './img/left.png'
import bottom from  './img/bottom.png'
import right from  './img/right.png'
import {Link} from "react-router-dom";

const Catalog1 = () => {
    return (

        <div className={classes.container}>
            <div className={classes.mainBlock}>
                <div className={classes.textBlock}>
                    <h2 className={classes.newEra}>NEW ERA</h2>
                    <p className={classes.text}>
                    Новая коллекция 2021 уже доступны на заказ<br/>
                    яркие цвета, винтажный принт 70х, тематические<br/>
                    группы и отличное качество</p>
                    <p className={classes.textTwo}>
                        Новая коллекция 2021 уже доступны на заказ
                        яркие цвета ...
                    </p>
                    <Link to="/catalog/"><button className={classes.button}>Открыть каталог</button></Link>
                </div>
                <div className={classes.images}>
                    <img className={classes.cap} src={cap} alt="кепка"/>
                    <img className={classes.capUp} src={capUp} alt="кепкаВверх"/>
                    <img className={classes.capDown} src={capDown} alt="кепкаВниз"/>
                    <img className={classes.circle} src={circle} alt="круг"/>
                    <img className={classes.circleFull} src={circleFull} alt=""/>
                    <img className={classes.redCircle} src={redCircle} alt="круг"/>
                    <img className={classes.capLeft} src={left} alt="круг"/>
                    <img className={classes.capRight} src={right} alt="круг"/>
                    <img className={classes.capBottom} src={bottom} alt="круг"/>
                </div>
            </div>
        </div>
    );
};

export default Catalog1;