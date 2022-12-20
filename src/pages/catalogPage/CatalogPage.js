import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {ProductsSelect} from "../../redux/slice/ProductsSlice";
import ProductCard from "../../components/productCard/ProductCard";
import classes from "./css/CatalogPage.module.css"
import {Container, Pagination} from "@mui/material";
import logo from "../../media/catalogPage/logo.png";

const CatalogPage = () => {
    const [select, setSelect] = useState('Популярные');
    const [filter, setFilter] = useState([]);
    const [page, setPage] = useState(1);
    const pageSize = 16;
    const products = useSelector(ProductsSelect);

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
            <div><img className={classes.logo} src={logo} alt=""/>
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
                            (select === 'Новинки' ? products : select === 'Популярные' ? products : filter).slice((pageSize * page) - pageSize, (pageSize * page)).map((e, k)=> <li key={k}><ProductCard product={e}/></li>)
                        }
                    </ul>
                    <div className={classes.pag}>
                        {
                            products.length >= pageSize &&
                            <Pagination
                                count={Math.ceil(products.length / pageSize)}
                                onChange={(_, n) => setPage(n)}
                                hidePrevButton={page === 1}
                                hideNextButton={Math.ceil(products.length / pageSize) === page}
                            />
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CatalogPage;