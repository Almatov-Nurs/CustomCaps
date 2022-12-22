import React from 'react';
import styles from "../catalog2/css/catalog2.module.css"
import kepka from "../../../media/catalog2/photo.png"
import BlockList from "../../../pages/catalog2Page/Catalog2Page";
import {Link} from "react-router-dom";
const Catalog2 = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.main}>
                        <div className={styles.mainKrug}></div>
                        <div className={styles.mainImage}>
                            <img src={kepka} alt="photo"/>
                        </div>

                        <div className={styles.mainBlocks}>
                            <BlockList/>
                        </div>
                        <div className={styles.mainRight}>
                            <div className={styles.rightText}>
                                <h1>SUPREME & NEW ERA</h1>
                                <p>collaboration</p>
                                <Link to="/catalog/"><button>Открыть каталог</button></Link>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={styles.cupsNumbers}>
                    <div className={styles.container}>
                        <div className={styles.cupsText}>
                            <h1>CUSTOM CUPS в цифрах</h1>
                        </div>
                        <div className={styles.cupsInfo}>
                            <div className={styles.infoItems}>
                                <h1>12000</h1>
                                <p>проданных кепок</p>
                            </div>
                            <div className={styles.infoItems}>
                                <h1>9</h1>
                                <p>лет на рынке</p>
                            </div>
                            <div className={styles.infoItems}>
                                <h1>8500 </h1>
                                <p>довольных клиентов</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog2;