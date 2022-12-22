import React, {useState} from 'react';
import classes from './css/BasketPage.module.css';
import {useSelector} from "react-redux";
import {ProductsSelect} from "../../redux/slice/ProductsSlice";
import {Modal} from "@mui/material";
import {ReactComponent as Accept} from "../../media/basketPage/Accept.svg";
import {Link} from "react-router-dom";

const BasketPage = () => {
    const products = useSelector(ProductsSelect);
    const [modal, setModal] = useState(false);
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
                                <h2>{e.price * count }сом</h2>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
            <div className={classes.all}>
                <div className={classes.info}>
                    <h1>Ваша информация</h1>
                    <div className={classes.minePlex}>
                        <form>
                            <div>
                                <input
                                    type='text'
                                    placeholder="Имя"
                                    className={classes.formaInput} />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    placeholder="Фамилия"
                                    className={classes.formaInput} />
                            </div>
                            <div>
                                <input
                                    type='number'
                                    placeholder="Номер телефона"
                                    className={classes.formaInput} />
                            </div>

                            <div>
                                <input
                                    type='email'
                                    placeholder="Email"
                                    className={classes.formaInput} />
                            </div>
                        </form>
                        <form className={classes.clicker}>
                            <div className={classes.about}>
                                <h3>Детали оплаты</h3>
                            </div>
                            <div>
                                <input type='radio' name='1'/>
                                <label>Банковская карта</label>
                            </div>
                            <div>
                                <input type='radio' name='1'/>
                                <label>Наличными курьеру</label>
                            </div>
                        </form>
                    </div>
                    <hr/>
                    <button onClick={()=>setModal(true)}>Купить</button>
                    <Modal open={modal} onClose={()=>setModal(false)}>
                        <div className={classes.modal}>
                            <Accept/>
                            <div>
                                <h3>Спасибо</h3>
                                <p>Ваш заказ принят</p>
                                <p>Ожидайте с вами скоро свяжутся</p>
                                <Link to="/"><button onClick={()=>setModal(false)}>На главную</button></Link>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default BasketPage;