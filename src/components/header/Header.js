import React, {useEffect, useState} from 'react';
import classes from "./css/Header.module.css";
import {useDispatch} from "react-redux";
import {getProducts} from "../../redux/slice/ProductsSlice";
import {ReactComponent as Logo} from "../../media/header/logo.svg";
import {ReactComponent as Search} from "../../media/header/search.svg";
import {ReactComponent as Searching} from "../../media/header/searching.svg";
import {ReactComponent as Basket} from "../../media/header/basket.svg";
import {Link} from "react-router-dom";

const Header = () => {
    const [input, setInput] = useState('');
    const [searching, setSearching] = useState(false);
    const [select, setSelect] = useState([false, false, false]);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <Link to="/"><Logo/></Link>
                    <div>
                        <Link to="/" className={select[0] ? classes.active : ""} onClick={()=>setSelect([true, false, false])}>Каталог</Link>
                        <Link to="/" className={select[1] ? classes.active : ""} onClick={()=>setSelect([false, true, false])}>Бренды</Link>
                        <Link to="" className={select[2] ? classes.active : ""} onClick={()=>setSelect([false, false, true])}>О нас</Link>
                    </div>
                </div>
                <div className={classes.right}>
                    <form action="">
                        <input
                            type="text"
                            value={input}
                            onChange={e=>setInput(e.target.value)}
                            onFocus={()=>setSearching(true)}
                            onBlur={()=>setSearching(false)}
                        />
                        <Link to="">{searching ? <Searching/> : <Search/>}</Link>
                    </form>
                    <Link to="/basket/"><Basket/></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;