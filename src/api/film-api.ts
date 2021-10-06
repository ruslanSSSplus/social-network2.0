
import axios from "axios";


export const filmAPI = {
    getFilms(currentPage =1) {
        return axios.get(`https://yts.mx/api/v2/list_movies.json?page=${currentPage}`).then(res=>res.data.data.movies)
    },

}