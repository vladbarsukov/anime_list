import {store} from "../../index";
import {TAnimeSeasonAction} from "../actions/animeSeasonActions";
import {ThunkDispatch} from "redux-thunk";
import {TAnimeByIdAction} from "../actions/animeByIdAction";

export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions = TAnimeSeasonAction | TAnimeByIdAction;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;