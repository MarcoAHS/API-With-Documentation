import { Animes } from "../../data/data"
import { Characters } from "../../data/data";
export async function GET({ params, request }) {
    const url = new URL(request.url)
    const animeId = parseInt(url.searchParams.get('animeId'))
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