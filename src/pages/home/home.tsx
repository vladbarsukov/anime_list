import React, {SyntheticEvent, useEffect, useState} from 'react';
import styles from './home.module.css'
import logo from "../../img/logoVladik.png";
import MainCard from "../../components/main-card/main-card";
import CardList from "../../components/card-list/card-list";
import {useSearchParams} from "react-router-dom";
import Button from "../../components/UI/button";
import {getAnimeSeason} from "../../services/actions/animeSeasonActions";
import {useDispatch, useSelector} from "../../services/hook";

const data = 'find some anime huh?'

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPadge] = useState(1)
    const dispatch = useDispatch();
    const pageQuery = searchParams.get('page')


    const onClickForward = (e: SyntheticEvent) => {
        if (pageQuery && +currentPage < 4) {
            setCurrentPadge(+currentPage + 1)
        }
    }
    const onClickBack = (e: SyntheticEvent) => {
        if (pageQuery && +currentPage > 1) {
            setCurrentPadge(+currentPage - 1)
        }
    }

    useEffect(() => {
        setSearchParams({page: currentPage.toString()})
        dispatch(getAnimeSeason('summer', '2023', 'ranked', 50));
    }, [currentPage])

    return (
        <div>
            <header className={styles.header}>
                <img src={logo} className={styles.logo} alt="logo" />
                <p>{data}</p>
            </header>
            <main className={styles.main}>
                <MainCard/>
                <nav className={styles.nav}>
                    <Button textContent={'BACK'} onClick={onClickBack }/>
                    <h3 className={styles.navText}>{currentPage}</h3>
                    <Button textContent={'NEXT'} onClick={onClickForward }/>
                </nav>
                <CardList page={currentPage}/>
                <nav className={styles.nav}>
                    <Button textContent={'BACK'} onClick={onClickBack }/>
                    <h3 className={styles.navText}>{currentPage}</h3>
                    <Button textContent={'NEXT'} onClick={onClickForward }/>
                </nav>
            </main>
        </div>
    );
};

export default Home;