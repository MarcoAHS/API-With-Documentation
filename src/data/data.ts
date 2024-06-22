import { category } from "./category";
export interface Anime {
    id: number;
    name: string;
    description: string;
    cover: string;
    categorys: string[];
    temporadas: number;
    episodios: number;
    peliculas: number;
}
export const Animes: Anime[] = [
    {
        id: 1,
        name: "Musoku Tensei Jobless Reencarnation",
        description: "The series is about a jobless overweight man who dies after having a withdrawn life and reincarnates in a fantasy world while keeping his memories of his previous life, determined to enjoy his new life without regrets under the name Rudeus Greyrat.",
        categorys: [category.slice_of_life, category.shounen],
        cover: "https://pbs.twimg.com/media/FT26DLcXoAM_D0t?format=jpg",
        temporadas: 3,
        episodios: 73,
        peliculas: 0
    },
    {
        id: 2,
        name: "Bocchi the Rock",
        description: "Extremely anxious and socially awkward Hitori Gotō longs to become a rock musician in spite of her struggles, while fulfilling her desires to one day make friends. She is suddenly given a chance to do so after she is taken in by another girl, Nijika Ijichi, to become a member of her newly formed Kessoku Band.",
        categorys: [category.slice_of_life],
        cover: "https://pbs.twimg.com/media/GJjQWksWcAA8pXw?format=png",
        temporadas: 1,
        episodios: 23,
        peliculas: 1
    }
]
export interface Character {
    id: number;
    animeId: number;
    name: string;
}
export const Characters: Character[] = [
    {
        id: 1,
        animeId: 1,
        name: "Rudy Greyrat",
    },
    {
        id: 2,
        animeId: 1,
        name: "Paul Greyrat",
    },
    {
        id: 3,
        animeId: 1,
        name: "Zenith Greyrat",
    }
]