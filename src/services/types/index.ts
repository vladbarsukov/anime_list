import {store} from "../../index";
import {TAnimeSeasonAction} from "../actions/animeSeasonActions";
import {ThunkDispatch} from "redux-thunk";

export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions = TAnimeSeasonAction;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;