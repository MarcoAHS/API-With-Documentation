import { Animes } from "../../data/data"
import { Characters } from "../../data/data";
export async function GET({ params, request }) {
    const animeId = Math.round(Math.random() * Animes.length)
    let finalAnime = []
    let finalCharacters = []
    if(animeId){
        finalAnime = [...Animes].flat().find(anime => {
            return anime.id === animeId
        })
        finalCharacters = [...Characters].flat().filter(char => char.animeId === animeId)
    }
    return new Response(JSON.stringify({anime: finalAnime, characters: finalCharacters}), {
        headers: {"content-type" : "application/json"}
    }) 
}