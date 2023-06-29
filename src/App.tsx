import React, {useEffect} from 'react';
import logo from './img/logoVladik.png'
import styles from './App.module.css'
import './App.module.css';
import MainCard from "./components/main-card/main-card";
import {getAnimeSeason} from "./services/actions/animeSeasonActions";
import {useDispatch} from "./services/hook";
import CardList from "./components/card-list/card-list";
import {BrowserRouter, Route, Router, Routes, useSearchParams} from "react-router-dom";
import Home from "./home/home";


function App() {
    const dispatch = useDispatch();

    // useEffect(
    //     () => {
    //         dispatch(getAnimeSeason(1));
    //     },
    //     [dispatch]
    // );

    return (
      <div className={styles.App}>
        <BrowserRouter>
            <Routes>
                <Route path="/anime_list" element={<Home />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;