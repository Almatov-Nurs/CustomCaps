import React from 'react';
import classes from './css/searchPage.module.css';
import {useSelector} from "react-redux";
import {CircularProgress} from "@mui/material";
import ProductCard from "../../components/productCard/ProductCard";

const SearchPage = () => {
    const search = useSelector(state => state.search.search);
    const load = useSelector(state => state.search.load);
    return (
        <div className={classes.searchPage}>
            {
                load
                    ? <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                        {search.length <= 0 ? 'Ничего не найдено!' : <CircularProgress/>}
                    </div>
                    :
                    <ul>
                        {
                            search.map((e, k)=> <li key={k}><ProductCard product={e}/></li>)
                        }
                    </ul>
            }
        </div>
    );
};

export default SearchPage;