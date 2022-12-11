import React, {useState} from 'react';
import classes from './css/BasketPage.module.css';
import {useSelector} from "react-redux";
import {ProductsSelect} from "../../redux/slice/ProductsSlice";

const BasketPage = () => {
    const products = useSelector(ProductsSelect);
    const [count, setCount] = useState(1);

    return (
        <div className={classes.basket}>
            <div className={classes.baskets}>
                <ul>
                    {
                        products.length > 0 && products.slice(0, 1).map((e, k) => <li key={k}>
                        <div className={classes.baskets__inner}>
                            <img src={e.image} alt="..."/>
                            <div className={classes.counter}><button onClick={()=>count > 1 && setCount(count-1)}>-</button>
                        {count}<button onClick={()=>setCount(count+1)}>+</button></div>
                            <div className={classes.size}>L</div>
                            <div className={classes.text}>
                                <h3>{e.name}</h3>
                                <p>{e.collab}</p>
                            </div>
                            <h2>{e.price * count}сом</h2>
                        </div>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default BasketPage;