import React, {useEffect, useState} from 'react';
import classes from './css/BasketPage.module.css';
import {Modal} from "@mui/material";
import {ReactComponent as Accept} from "../../media/basketPage/Accept.svg";
import {Link} from "react-router-dom";
import BasketContainer from "../../components/basketPage/basketContainer";

const BasketPage = () => {
    const [products, setProducts] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(()=>{
        setProducts(JSON.parse(localStorage.getItem('basket')));
    },[]);
    return (
        <div className={classes.basket}>
            <div className={classes.baskets}>
                <ul>
                    {
                        products.length > 0 && products.map((e, k) => <li key={k}>
                            <BasketContainer e={e}/>
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