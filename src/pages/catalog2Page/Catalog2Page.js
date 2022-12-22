import React from 'react';
import image1 from "../../media/catalog2/111.png"
import styles from "../../components/mainPage/catalog2/css/catalog2.module.css"
import image2 from "../../media/catalog2/222.png";
import image3 from "../../media/catalog2/333.png";
function BlockList({style}) {
    return (
        <div style={style}>
            <div className={styles.blockOne}>
                <div className={styles.blockText}>
                    <h2>Supreme</h2>
                    <h4>Liberty</h4>
                    <p>5600</p>
                </div>
                <div className={styles.blockImg}>
                    <img src={image1} alt="photo"/>
                </div>
            </div>
            <div className={styles.blockOne}>
                <div className={styles.blockText}>
                    <h2>Supreme</h2>
                    <h4>Liberty</h4>
                    <p>5600</p>
                </div>
                <div className={styles.blockImg}>
                    <img src={image2} alt="photo"/>
                </div>
            </div>
            <div className={styles.blockOne}>
                <div className={styles.blockText}>
                    <h2>Supreme</h2>
                    <h4>Liberty</h4>
                    <p>5600</p>
                </div>
                <div className={styles.blockImg}>
                    <img src={image3} alt="photo"/>
                </div>
            </div>
        </div>
    );
}

export default BlockList;