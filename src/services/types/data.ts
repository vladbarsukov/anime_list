// export interface IAnimeSeason {
//     mal_id: number;
//     url: string;
//     images: {
//         jpg: {
//             image_url: string;
//             small_image_url: string;
//             large_image_url: string;
//         };
//         webp: {
//             image_url: string;
//             small_image_url: string;
//             large_image_url: string;
//         };
//     };
//     trailer: {
//         youtube_id: string;
//         url: string;
//         embed_url: string;
//         images: {
//             image_url: string;
//             small_image_url: string;
//             medium_image_url: string;
//             large_image_url: string;
//             maximum_image_url: string;
//         };
//     };
//     approved: boolean;
//     titles: {
//         type: string;
//         title: string;
//     }[];
//     title: string;
//     title_english: string;
//     title_japanese: string;
//     title_synonyms: string[];
//     type: string;
//     source: string;
//     episodes: number;
//     status: string;
//     airing: boolean;
//     aired: {
//         from: string;
//         to: string;
//         prop: {
//             from: {
//                 day: number;
//                 month: number;
//                 year: number;
//             };
//             to: {
//                 day: number;
//                 month: number;
//                 year: number;
//             };
//         };
//         string: string;
//     };
//     duration: string;
//     rating: string;
//     score: number;
//     scored_by: number;
//     rank: number;
//     popularity: number;
//     members: number;
//     favorites: number;
// }

export interface IAnimeSeason {
    id: number;
    name: string;
    russian: string;
    image: {
        original: string;
        preview: string;
        x96: string;
        x48: string;
    };
    url: string;
    kind: string;
    score: string;
    status: string;
    episodes: number;
    episodes_aired: number;
    aired_on: string;
    released_on: string;
}