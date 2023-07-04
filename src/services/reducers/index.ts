import {combineReducers} from "redux";
import {AnimeSeasonReducer} from "./animeSeasonReducer";
import {AnimeByIdReducer} from "./animeByIdReduser";

export const rootReducers = combineReducers({
    AnimeSeasonReducer,
    AnimeByIdReducer,
})