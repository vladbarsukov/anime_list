import React, {FC} from 'react';
import SmallCard from "../small-card/small-card";
import styles from "./card-list.module.css"
import {useSelector} from "../../services/hook";
import {IAnimeSeason} from "../../services/types/data";

type TCardList = {
}
const CardList: FC<TCardList> = () => {
    const { anime } = useSelector(
        state => state.AnimeSeasonReducer
    );
    return (
        <div className={styles.wrapper}>
            {(anime as Array<IAnimeSeason>).map((item: IAnimeSeason) => (
                    <SmallCard anime={item} key={item.mal_id}/>
              ))
            }
        </div>
    );
};

export default CardList;