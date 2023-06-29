import React from 'react';
import styles from './main-card.module.css'
import img from '../../img/animeWoman.png'

const MainCard = () => {

    return (
        <div className={styles.container}>
            <img className={styles.img} src={img} alt='anime'/>
        </div>
    );
};

export default MainCard;