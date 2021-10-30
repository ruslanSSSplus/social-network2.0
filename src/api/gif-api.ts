

import axios from "axios";

export const gifApi = {
    getSmthEvil() {

        return axios.get<any>(`https://api.giphy.com/v1/gifs/random?api_key=TarQfWOwDk4dQg8syslWxwsWWobrCCaO&tag=&rating=r`)
            .then((data: any) => data.data.data.images.original.url);
    },
    getGiftsForNews() {

        return axios.get<any>(`https://api.giphy.com/v1/gifs/trending?api_key=TarQfWOwDk4dQg8syslWxwsWWobrCCaO&limit=5&rating=r`)
            .then((data: any) => data.data.data);
    },
}

