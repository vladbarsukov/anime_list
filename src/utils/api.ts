import axios from "axios";
import {BASE_URL} from "./constants";

export const getAnimeSeasonRequest = async (page: number) => {
    return await axios.get(`${BASE_URL}/seasons/now?page=${page}`)
}

export const getAnimeByIdRequest = async (id: number) => {
    return await axios.get(`${BASE_URL}/anime/${id}`)
}