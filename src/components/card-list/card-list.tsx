import React, {FC} from 'react';
import SmallCard from "../small-card/small-card";
import styles from "./card-list.module.css"
import {useSelector} from "../../services/hook";
import {IAnimeSeason} from "../../services/types/data";

type TCardList = {
    page: number
}

const CardList: FC<TCardList> = ({page}) => {
    const { anime } = useSelector(
        state => state.AnimeSeasonReducer
    );

    const calculateAnimeInPage = (page: number) => {
        const modify = page * 10
        const first = 0
        const end = 10
        if (page === 1) {
            return  anime.slice(first, end)
        } else {
            return  anime.slice(modify , modify + 10)
        }

    }

    return (
        <div className={styles.wrapper}>
            {anime ?
                (calculateAnimeInPage(page) as Array<IAnimeSeason>).map((item: IAnimeSeason) => (
                    <SmallCard anime={item} key={item.id}/>
                ))
             : <></>}

        </div>
    );
};

export default CardList;