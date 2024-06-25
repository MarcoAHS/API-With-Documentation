import { Characters } from "../../data/data";
export async function GET({ params, request }) {
    const url = new URL(request.url)
    let finalResponse = [...Characters].flat()
    const animeId = url.searchParams.get('animeId')
    if(animeId) {
        finalResponse = finalResponse.filter(cha => cha.animeId === parseInt(animeId))
    }
    return new Response(JSON.stringify(finalResponse), {
        headers: {"content-type" : "application/json"}
    }) 
}