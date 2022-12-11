import React, {useEffect} from 'react';
import classes from "./css/Header.module.css";
import {useDispatch} from "react-redux";
import {getProducts} from "../../redux/slice/ProductsSlice";

const Header = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);
    return (
        <div className={classes.header}>
        </div>
    );
};

export default Header;