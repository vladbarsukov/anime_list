import {
    GET_ANIME_SEASON_FAILED,
    GET_ANIME_SEASON_REQUEST,
    GET_ANIME_SEASON_SUCCESS,
    TAnimeSeasonAction
} from "../actions/animeSeasonActions";
import {IAnimeSeason} from "../types/data";

type TAnimeSeasonState = {
    anime: Array<IAnimeSeason>;
    animeRequest: boolean;
    animeFailed: boolean;
}

const initialState: TAnimeSeasonState = {
    anime: [],
    animeRequest: false,
    animeFailed: false,
};

export const AnimeSeasonReducer = (state = initialState, action: TAnimeSeasonAction) => {
    switch (action.type) {
        case GET_ANIME_SEASON_REQUEST: {
            return {
                ...state,
                animeRequest: true
            };
        }
        case GET_ANIME_SEASON_SUCCESS: {
            return { ...state, animeFailed: false, anime: action.anime, animeRequest: false };
        }
        case GET_ANIME_SEASON_FAILED: {
            return { ...state, animeFailed: true, animeRequest: false };
        }
        default: {
            return state;
        }
    }
};