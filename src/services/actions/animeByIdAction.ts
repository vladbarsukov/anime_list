import {IAnimeSeason} from "../types/data";
import {AppDispatch} from "../types";
import {getAnimeByIdRequest} from "../../utils/api";

export const GET_ANIME_BY_ID_REQUEST: "GET_ANIME_BY_ID_REQUEST" = "GET_ANIME_BY_ID_REQUEST"
export const GET_ANIME_BY_ID_SUCCESS: "GET_ANIME_BY_ID_SUCCESS" = "GET_ANIME_BY_ID_SUCCESS"
export const GET_ANIME_BY_ID_FAILED: "GET_ANIME_BY_ID_FAILED" = "GET_ANIME_BY_ID_FAILED"

export interface IGetAnimeByIdRequest {
    readonly type: typeof GET_ANIME_BY_ID_REQUEST
}

export interface IGetAnimeByIdRequest {
    readonly type: typeof GET_ANIME_BY_ID_REQUEST
}

export interface IGetAnimeByIdSuccess {
    readonly type: typeof GET_ANIME_BY_ID_SUCCESS
    readonly anime: IAnimeSeason
}

export interface IGetAnimeByIdFailed {
    readonly type: typeof GET_ANIME_BY_ID_FAILED
}

export type TAnimeByIdAction = IGetAnimeByIdRequest | IGetAnimeByIdSuccess | IGetAnimeByIdFailed;

export const getAnimeById = (page: number) =>
    (dispatch: AppDispatch) =>{
        dispatch({
            type: GET_ANIME_BY_ID_REQUEST
        });
        getAnimeByIdRequest(page)
            .then(res => {
                dispatch({
                    type: GET_ANIME_BY_ID_SUCCESS,
                    anime: res.data.data
                });
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: GET_ANIME_BY_ID_FAILED
                });
            })
    };