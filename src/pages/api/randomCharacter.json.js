import { Characters } from "../../data/data";
export async function GET({ params, request }) {
    let finalResponse = Characters[Math.round(Math.random() * Characters.length)]
    return new Response(JSON.stringify(finalResponse), {
        headers: {"content-type" : "application/json"}
    }) 
}