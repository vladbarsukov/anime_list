import axios from "axios";
import {BASE_URL} from "./constants";

// interface AnimeSeasonRequest {
//     season: string
//     year: string
//     order: string
//     limit: number
// }
export const getAnimeSeasonRequest = async (season: string, year: string, order: string, limit: number) => {
    return await axios.get(`${BASE_URL}/animes?season=${season}_${year}&order=${order}&limit=${limit}`)
}

export const getAnimeByIdRequest = async (id: number) => {
    return await axios.get(`${BASE_URL}/animes/${id}`)
}