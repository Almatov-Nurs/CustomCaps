import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {LoadSelect, ProductsSelect} from "../../redux/slice/ProductsSlice";
import ProductCard from "../../components/productCard/ProductCard";
import classes from "./css/CatalogPage.module.css"
import {CircularProgress, Container, Pagination} from "@mui/material";
import logo from "../../media/catalogPage/logo.png";

const CatalogPage = () => {
    const load = useSelector(LoadSelect);
    const products = useSelector(ProductsSelect);
    const products_ = products.concat(products.concat(products.concat(products.concat(products))))
    const [select, setSelect] = useState('Популярные');
    const [filter, setFilter] = useState([]);
    const [page, setPage] = useState(1);
    const pageSize = 16;

    const handleSelect = e => {
        setSelect(e.target.value);
    };

    useEffect(()=>{
        if (select === 'Сначала дешевые') {
            setFilter([...products].sort((p, n) => p.price - n.price));
        } else if (select === 'Сначала дорогие') {
            setFilter([...products].sort((p, n) => n.price - p.price));
        }
    },[products, select]);
    return (
        <div>
            <div style={{position: "relative"}}><img className={classes.logo} src={logo} alt=""/>
                <h1 className={classes.logoText}>НОВАЯ СЕРИЯ<br/>McLAREN</h1>
            </div>
            <Container fixed>
                <div className={classes.filter}>
                    <select className={classes.select} onChange={handleSelect}>
                        <option>Популярные</option>
                        <option>Сначала дешевые</option>
                        <option>Сначала дорогие</option>
                        <option>Новинки</option>
                    </select>
                </div>
                <div className={classes.catalog}>
                    <ul className={classes.pictures}>
                        {
                            load
                                ? <div style={{width: "100%", display: "flex", justifyContent: "center"}}><CircularProgress/></div>
                                : (select === 'Новинки' ? products_ : select === 'Популярные' ? products_ : filter).slice((pageSize * page) - pageSize, (pageSize * page)).map((e, k)=> <li key={k}><ProductCard product={e}/></li>)
                        }
                    </ul>
                    <div className={classes.pag}>
                        {
                            !load && products_.length >= pageSize &&
                            <Pagination
                                count={Math.ceil(products_.length / pageSize)}
                                onChange={(_, n) => setPage(n)}
                                hidePrevButton={page === 1}
                                hideNextButton={Math.ceil(products_.length / pageSize) === page}
                            />
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CatalogPage;