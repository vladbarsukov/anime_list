import React, {FC} from 'react';
import styles from './App.module.css'
import './App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import AnimeInfo from "./pages/anime-info/anime-info";


const App: FC = () => {
    return (
      <div className={styles.App}>
        <BrowserRouter>
            <Routes>
                <Route path="/anime_list/" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/anime/:id" element={<AnimeInfo />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;