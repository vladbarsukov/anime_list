import React from 'react';
import styles from './App.module.css'
import './App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home/home";


function App() {
    return (
      <div className={styles.App}>
        <BrowserRouter>
            <Routes>
                <Route path="/anime_list/" element={<Home />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;