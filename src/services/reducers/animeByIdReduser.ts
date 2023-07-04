import {IAnimeSeason} from "../types/data";

import {
    GET_ANIME_BY_ID_FAILED,
    GET_ANIME_BY_ID_REQUEST,
    GET_ANIME_BY_ID_SUCCESS,
    TAnimeByIdAction
} from "../actions/animeByIdAction";

type TAnimeByIdState = {
    anime: IAnimeSeason | null;
    animeRequest: boolean;
    animeFailed: boolean;
}

const initialState: TAnimeByIdState = {
    anime: null,
    animeRequest: false,
    animeFailed: false,
};

export const AnimeByIdReducer = (state = initialState, action: TAnimeByIdAction) => {
    switch (action.type) {
        case GET_ANIME_BY_ID_REQUEST: {
            return {
                ...state,
                animeRequest: true
            };
        }
        case GET_ANIME_BY_ID_SUCCESS: {
            return { ...state, animeFailed: false, anime: action.anime, animeRequest: false };
        }
        case GET_ANIME_BY_ID_FAILED: {
            return { ...state, animeFailed: true, animeRequest: false };
        }
        default: {
            return state;
        }
    }
};