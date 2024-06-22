import { Animes, Anime } from "../../data/data"
export async function GET ({ params, request}) {
    const url = new URL(request.url)
    const category = url.searchParams.get('category')
    const seasons = url.searchParams.get('seasons')
    const chapters = url.searchParams.get('chapters')
    let finalResponse = Animes
    if(seasons){
        if(seasons.toUpperCase() === "ASC"){
            finalResponse = finalResponse.sort((a, b) => a.temporadas - b.temporadas)
        } else if(seasons.toUpperCase() === "DESC"){
            finalResponse = finalResponse.sort((a, b) => b.temporadas - a.temporadas)
        } else {
            return new Response(JSON.stringify({message: "Parameter 'Seasons' incorrect"}), {
                headers: { "contend-type": "application/json" },
                status: 400
            })
        }
    }
    if(chapters){
        if(chapters.toUpperCase() === "ASC"){
            finalResponse = finalResponse.sort((a, b) => a.temporadas - b.temporadas)
        } else if(chapters.toUpperCase() === "DESC"){
            finalResponse = finalResponse.sort((a, b) => b.temporadas - a.temporadas)
        } else {
            return new Response(JSON.stringify({message: "Parameter 'Chapters' incorrect"}), {
                headers: { "contend-type": "application/json" },
                status: 400
            })
        }
    }
    if(category){
        finalResponse = finalResponse.filter(anime => !(anime.categorys.indexOf(category) === -1))
    }
    if(finalResponse.length === 0){
        return new Response(JSON.stringify({message: "Theres no Animes with that Category"}), {
            headers: { "contend-type": "application/json" },
            status: 400
        })
    }
    return new Response(JSON.stringify(finalResponse),{
        headers: { "contend-type": "application/json" },
    })
}