import React, {useEffect} from 'react';
import styles from './anime-info.module.css'
import {useDispatch, useSelector} from "../../services/hook";
import {useParams} from "react-router-dom";
import {getAnimeById} from "../../services/actions/animeByIdAction";
const AnimeInfo = () => {
    const dispatch = useDispatch()
    const page = useParams()
    const { anime } = useSelector(
        state => state.AnimeByIdReducer
    );
    useEffect(()=> {
        console.log(page.id)
        if (page.id) {
            dispatch(getAnimeById(+page.id))
        }
    },[page.id])



    return anime ? (

        <div className={styles.container}>
            <div className={styles.card}>
                <img src={anime.images.webp.large_image_url} alt={'img'}/>
            </div>
            <div className={styles.description}>
                <h1 className={styles.text}>{anime.title}</h1>
            </div>
        </div>
    ) : <></>
};

export default AnimeInfo;