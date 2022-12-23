import React, {useState} from 'react';
import classes from "../../pages/basketPage/css/BasketPage.module.css";

const BasketContainer = ({e}) => {
    const [count, setCount] = useState(1);
    return (
        <div className={classes.baskets__inner}>
            <img src={e.image} alt="..."/>
            <div className={classes.counter}><button onClick={()=>count > 1 && setCount(count-1)}>-</button>
                {count}<button onClick={()=>setCount(count+1)}>+</button></div>
            <div className={classes.size}>L</div>
            <div className={classes.text}>
                <h3>{e.name}</h3>
                <p>{e.collab}</p>
            </div>
            <h2>{e.price * count }сом</h2>
        </div>
    );
};

export default BasketContainer;