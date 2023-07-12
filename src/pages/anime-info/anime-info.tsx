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
        console.log(anime)
        if (page.id) {
            dispatch(getAnimeById(+page.id))
        }
    },[page.id])

    return anime ? (

        <div className={styles.container}>
            <div className={styles.card}>
                <img className={styles.img} src={`https://shikimori.one/${anime.image.original}`} alt={'img'}/>
            </div>
            <div className={styles.description}>
                <h1 className={styles.text}>{anime.russian}</h1>
                <p>{`Рейтинг: ${anime.score}`}</p>
                <p>{`Тип: ${anime.kind.toUpperCase()}`}</p>
                <p>{`Эпизоды: ${anime.episodes}`}</p>
                <p>{`Следующий эпизод: ${anime.next_episode_at}`}</p>
                <p>{anime.description ? anime.description.replace(/\[.*?]|]/g, '')
                    : "описание отсутствует"}</p>
            </div>
        </div>
    ) : <></>
};

export default AnimeInfo;