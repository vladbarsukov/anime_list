import React, {FC, useState} from 'react';
import styles from './small-card.module.css'
import {IAnimeSeason} from "../../services/types/data";
import {useNavigate} from "react-router-dom";

type TAnimeListProps = {
    anime: IAnimeSeason
};
const SmallCard: FC<TAnimeListProps> = ({anime}) => {
    const [isHovered, setIsHovered] = useState(false)
    const naviagate = useNavigate()

    const onClick = () => {
        naviagate(`/anime/${anime.mal_id}`)
    }

    return (
        <div onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={styles.container}>
            <img className={isHovered ? styles.hovered:  styles.img} src={anime.images.webp.image_url} alt={'постер'}/>
            {isHovered ? (<p className={styles.title}>{anime.title}</p>) : (<></>)}
        </div>
    );
};

export default SmallCard;