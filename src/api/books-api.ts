
import axios from "axios";


export const booksAPI = {
    getBooks(smth = 'javascript') {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${smth}`).then(res=>res.data.items)
    },
}