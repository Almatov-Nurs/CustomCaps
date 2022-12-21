import React, {useEffect, useState} from 'react';
import classes from "./css/Header.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, ProductsSelect} from "../../redux/slice/ProductsSlice";
import {ReactComponent as Logo} from "../../media/header/logo.svg";
import {ReactComponent as Search} from "../../media/header/search.svg";
import {ReactComponent as Searching} from "../../media/header/searching.svg";
import {ReactComponent as Basket} from "../../media/header/basket.svg";
import {Link, useLocation} from "react-router-dom";
import {getSearch} from "../../redux/slice/searchSlice";

const Header = () => {
    const location = useLocation();
    const products = useSelector(ProductsSelect);
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [searching, setSearching] = useState(false);
    const [select, setSelect] = useState([false, false, false]);
    const [search, setSearch] = useState([]);

    const handleClick = ({target}) => {
        setInput(target.value);
        target.value !== "" ? setSearch(products.filter(e => e.name.includes(target.value))) : setSearch([]);
    };
    const searched = () => {
        setInput("");
        dispatch(getSearch(search));
    };

    window.addEventListener("scroll", () => location.pathname === "/" && console.log(window.scrollY));

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
                            onChange={handleClick}
                            onFocus={()=>setSearching(true)}
                            onBlur={()=>setSearching(false)}
                        />
                        <Link to="/search" onClick={searched}>{searching ? <Searching/> : <Search/>}</Link>
                        <ul>
                            {
                                search.map((e, k) => <li key={k}>{e.name}</li>)
                            }
                        </ul>
                    </form>
                    <Link to="/basket/"><Basket/></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;