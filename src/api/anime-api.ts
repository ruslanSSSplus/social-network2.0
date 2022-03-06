
import axios from "axios";


export const animeAPI = {
    getAnimes(currentPage =1, smth: string) {
        if(smth === ""){
            smth ="tokyo"
        }
        currentPage = currentPage -1
        console.log(currentPage)
        return axios.get(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${currentPage*10}&filter[text]=${smth}`).then(res=>res.data.data)
    },
}