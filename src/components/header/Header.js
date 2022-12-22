import React, {useEffect, useState} from 'react';
import classes from "./css/Header.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, ProductsSelect} from "../../redux/slice/ProductsSlice";
import {ReactComponent as Logo} from "../../media/header/logo.svg";
import {ReactComponent as Search} from "../../media/header/search.svg";
import {ReactComponent as Searching} from "../../media/header/searching.svg";
import {ReactComponent as Basket} from "../../media/header/basket.svg";
import {Link, NavLink, useLocation} from "react-router-dom";
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
        target.value !== "" ? setSearch(products.filter(e => e.name.toLowerCase().includes(target.value.toLowerCase()))) : setSearch([]);
    };
    const searched = () => {
        dispatch(getSearch(search));
        setInput("");
    };

    location.pathname === "/" && window.addEventListener("scroll", ()=> {
        if (window.scrollY >= 0 && window.scrollY <= 1340) {
            setSelect([true, false, false]);
        } else {
            setSelect([false, true, false]);
        }
    });

    const handleScroll = ({target}) => {
        if (target.textContent === 'Каталог') {
            setSelect([true, false, false]);
            window.scrollTo({
                top: 1275,
                behavior: "smooth"
            });
        } else if (target.textContent === 'Бренды') {
            setSelect([false, true, false]);
            window.scrollTo({
                top: document.body.clientHeight,
                behavior: "smooth"
            });
        } else if (target.textContent === 'О нас') {
            setSelect([false, false, true]);
        }
    };

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <Link to="/"><Logo/></Link>
                    <div>
                        <Link to="/" className={select[0] ? classes.active : ""} onClick={handleScroll}>Каталог</Link>
                        <Link to="/" className={select[1] ? classes.active : ""} onClick={handleScroll}>Бренды</Link>
                        <Link to="" className={select[2] ? classes.active : ""} onClick={handleScroll}>О нас</Link>
                    </div>
                </div>
                <div className={classes.right}>
                    <form action={`/search/${input}/`}>
                        <input
                            type="text"
                            value={input}
                            onChange={handleClick}
                            onFocus={()=>setSearching(true)}
                            onBlur={()=>setSearching(false)}
                            style={search.length > 0 ? { borderRadius: "15px 15px 0 0", borderBottom: "1px solid #fff"} : {borderBottom: "1px solid rgba(0, 0, 0, 0.2)"}}
                        />
                        <Link onClick={searched} to={input !== "" ? `/search/${input}/` : ""}>{searching ? <Searching/> : <Search/>}</Link>
                        <ul style={search.length > 0 ? {border: "1px solid rgba(0, 0, 0, 0.2)"} : {border: "1px solid #fff"}}>
                            {
                                search.map((e, k) => <li key={k}><Link to={`/cap/${e.name}/`}>{e.name}</Link></li>)
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