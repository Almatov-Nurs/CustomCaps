import React from 'react';
import classes from './css/ProductCard.module.css';
import {NavLink} from "react-router-dom";

const ProductCard = ({product, border = true}) => {
    return (
        <div style={{width:"max-content"}}>
            <NavLink className={classes.link} to={`/cap/${product.name}`}>
                <div className={border ? classes.card : classes.cardSlide}>
                    <div className={classes.image}>
                        <img src={product.image} alt=""/>
                    </div>
                    <div className={classes.cardInfo}>
                    <span>
                        <h3>{product.description}</h3>
                        <p>{product.name}</p>
                    </span>
                        <h3>{product.price}с</h3>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default ProductCard;