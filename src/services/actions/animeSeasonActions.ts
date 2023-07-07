import {AppDispatch} from "../types";
import {getAnimeSeasonRequest} from "../../utils/api";
import {IAnimeSeason} from "../types/data";

export const GET_ANIME_SEASON_REQUEST: "GET_ANIME_SEASON_REQUEST" = "GET_ANIME_SEASON_REQUEST"
export const GET_ANIME_SEASON_SUCCESS: "GET_ANIME_SEASON_SUCCESS" = "GET_ANIME_SEASON_SUCCESS"
export const GET_ANIME_SEASON_FAILED: "GET_ANIME_SEASON_FAILED" = "GET_ANIME_SEASON_FAILED"

export interface IGetAnimeSeasonRequest {
    readonly type: typeof GET_ANIME_SEASON_REQUEST
}

export interface IGetAnimeSeasonSuccess {
    readonly type: typeof GET_ANIME_SEASON_SUCCESS
    readonly anime: IAnimeSeason[]
}

export interface IGetAnimeSeasonFailed {
    readonly type: typeof GET_ANIME_SEASON_FAILED
}



export type TAnimeSeasonAction = IGetAnimeSeasonRequest | IGetAnimeSeasonSuccess | IGetAnimeSeasonFailed

export const getAnimeSeason = (season: string, year: string, order: string, limit: number) =>
    (dispatch: AppDispatch) =>{
        dispatch({
            type: GET_ANIME_SEASON_REQUEST
        });
        getAnimeSeasonRequest(season, year, order, limit)
            .then(res => {
                dispatch({
                    type: GET_ANIME_SEASON_SUCCESS,
                    anime: res.data
                });
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: GET_ANIME_SEASON_FAILED
                });
            })
    };

