import React from 'react';
import profileReducer from "../redux/profileReducer";
import dialogReducer from "../redux/dialogReducer";
import musicReducer from "../redux/musicReducer";
import friendsReducer from "../redux/friendsReducer";

const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_SONG = 'ADD-SONG';
const ADD_FRIEND = 'ADD-FRIEND';
const UPDATE_NEW_SONG_TEXT = 'UPDATE-NEW-SONG-TEXT';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE-NEW-NEWS-TEXT';

const UPDATE_NEW_PICTURE_TEXT = 'UPDATE-NEW-PICTURE-TEXT';


let store = {

    _state: {
        profile: {
            posts: [

                {
                    id:1,
                    post: 'First Friend GEna DaUn',
                    user: 'Гена',
                    time: 'сегодня в 11 утра',
                    picture: 'https://sun9-35.userapi.com/impf/c846522/v846522118/18d9eb/E5pvZnPh9hU.jpg?size=1920x1080&quality=96&sign=028f51047f18db27b0be9c3f5f266980&type=album',
                    avatar: 'https://sun9-75.userapi.com/impg/aYFVgULQds2uRK4ftm0VLGIE2pI63Pua3beoPg/d1vQS_fajKI.jpg?size=695x1056&quality=96&sign=e5baf9a52d7ac0e40e6a4fe9b9338c4c&type=album'
                },
                {
                    id: 2,
                    time: 'сегодня',
                    post: 'У меня такой же )))',
                    user: 'Gena',
                    avatar: 'https://sun9-75.userapi.com/impg/aYFVgULQds2uRK4ftm0VLGIE2pI63Pua3beoPg/d1vQS_fajKI.jpg?size=695x1056&quality=96&sign=e5baf9a52d7ac0e40e6a4fe9b9338c4c&type=album',

                    picture: 'https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg',
                },
                {
                    id: 3,
                    post: '1111',
                    user: 'Pavel  -   ',
                    time: 'сегодня в ',
                    picture: 'https://99px.ru/sstorage/53/2020/12/mid_318736_308803.jpg',
                    avatar: 'https://sun9-44.userapi.com/impg/UACJRHqPtJbLkJ0-VD5mB4N7QZc1z5lMli1gyA/CCQgY0fVx8Y.jpg?size=810x1080&quality=96&sign=a0025252fa6bb8f7f6b5b55a9719902e&type=album'
                },

                {
                    id: 4,
                    post: '222222222',
                    user: 'Maks  -   ',
                    time: 'сегодня в 11 ',
                    picture: 'https://oir.mobi/uploads/posts/2021-03/1616973116_8-p-fon-dlya-rabochego-stola-zhivie-oboi-9.jpg',
                    avatar: 'https://sun9-41.userapi.com/impg/QiItVXppdk3B8LT7Yd31GixhGUoETDPGeS82UQ/-gHFtJx41Uc.jpg?size=1080x1350&quality=96&sign=2035d42234fdc4238f96632232064a4b&type=album'
                },
                {
                    id: 5,
                    post: '33333333333333',
                    user: 'Ga4ibyan  -   ',
                    time: 'сегодня в 11 утра',
                    picture: 'https://wallpapershome.ru/images/pages/ico_h/21906.jpg',
                    avatar: 'https://sun9-44.userapi.com/impg/3ueMAfcHjkVqJK_R-QFh2Vy3fb5voGKMOZFGBA/LEmwuBvrp0g.jpg?size=1440x2160&quality=96&sign=51dab95706014952c015588c5c4f3bbc&type=album'
                }
            ],
            newnewstext: '',
            newpicturetext: '',

        },
        dialogs: {
            messages: [
                {id: 1, message: 'loh gena loh'},
                {id: 2, message: 'loh misha loh'},
                {id: 3, message: 'loh pasha loh'},
                {id: 4, message: 'loh nikita loh'},
                {id: 5, message: 'loh tima loh'},
            ],
            dialogs: [
                {id: 1, name: 'gena'},
                {id: 2, name: 'misha'},
                {id: 3, name: 'pasha'},
                {id: 4, name: 'nikita'},
                {id: 5, name: 'tima'},
            ],
            newmessagetext: '',
        },
        friends: {
            friendDate: [
                {
                    id: 1,
                    link: 'https://vk.com/dank_af',
                    name: 'Геннадий',
                    avatar: 'https://meragor.com/files/styles//ava_800_800_wm/ava-241.jpg',
                    surname: 'Льянов'
                },
                {
                    id: 2,
                    link: 'https://vk.com/get_imba',
                    name: 'Тимур',
                    surname: 'Льянов',
                    avatar: 'https://i.pinimg.com/originals/d2/27/67/d22767e3ecd58f14c839092e1dfe3852.jpg'
                },
                {
                    id: 3,
                    link: 'https://vk.com/evgeniasims',
                    name: 'Евгение',
                    surname: 'ЗигХайретдинов',
                    avatar: 'http://sun9-67.userapi.com/s/v1/ig2/6JU7DbnLm46xuMVj9w2gHBOoagBCXOCkTilVO__oHcVOxVdwYVIxZAfEKG7R9_EnXUb-CLjsqkl-cuetoovsmwDU.jpg?size=200x0&quality=96&crop=1,1,1197,1197&ava=1'
                },
                {
                    id: 4,
                    link: 'https://vk.com/id153839551',
                    name: 'Кекс',
                    surname: 'Слесырев',
                    avatar: 'https://anime-fans.ru/wp-content/uploads/2021/01/Ochen-smeshnye-anime-avy_01.jpg'
                },
                {
                    id: 5,
                    link: 'https://vk.com/steelfella',
                    name: 'Макс',
                    surname: 'Куриборг',
                    avatar: 'https://cspromogame.ru//storage/upload_images/avatars/3935.jpg'
                },
                {
                    id: 6,
                    link: 'https://vk.com/relaxwithbatya',
                    name: 'lov',
                    surname: 'u',
                    avatar: 'https://i.ytimg.com/vi/Q7fMCVoal08/sddefault.jpg'
                },
            ]
        },
        sidebar: {
            bestfriends: [
                {
                    id: 1,
                    name: 'Геннадий',
                    avatar: 'https://sun9-75.userapi.com/impg/aYFVgULQds2uRK4ftm0VLGIE2pI63Pua3beoPg/d1vQS_fajKI.jpg?size=695x1056&quality=96&sign=e5baf9a52d7ac0e40e6a4fe9b9338c4c&type=album',
                    surname: 'Льянов'
                },
                {
                    id: 2,
                    name: 'Тимур',
                    surname: 'Льянов',
                    avatar: 'https://sun9-42.userapi.com/impf/c844416/v844416714/12ff0b/DZIAss-5O_I.jpg?size=1024x1024&quality=96&sign=38589b1a8a876c2796ef79f1fab05059&type=album'
                },
                {
                    id: 4,
                    name: 'Никита',
                    surname: 'кесырев',
                    avatar: 'https://sun9-23.userapi.com/impg/qjKg0gKdIBW-1YKG9dVgh68dCnD1mPjrUqQvgg/Bh8eNjyakC0.jpg?size=512x384&quality=96&sign=89f25cbca2cdc38325352d639a4a7e51&type=album'
                }
            ]
        },
        musics: {
            songs: [
                {
                    id: 1, nameSong: 'gachimuchi -' +
                        ' А как насчёт ♂ANAL?♂'
                },
                {
                    id: 2, nameSong: 'GACHIMUCHI -' +
                        ' Чудо (right version)'
                },
                {
                    id: 3, nameSong: 'gachimuchi -' +
                        ' ♂️Филипп Киркоров - Это не снег♂'
                },
                {
                    id: 4, nameSong: 'gachimuchi -' +
                        ' ♂️Спокойная ночь - Кино♂'
                },
                {
                    id: 5, nameSong: 'GachiMuchi -' +
                        ' Я назову планету'
                },
            ],
            newsongtext: "",
        },
        news: {
            new: [
                {
                    id: 1,
                    time: 'сегодня в 11 утра',
                    post: 'Вчера посмотрел атаку титанов, это просто 12 из 10 археэпично',
                    user: 'Timur Brat',
                    avatar: 'https://sun9-42.userapi.com/impf/c844416/v844416714/12ff0b/DZIAss-5O_I.jpg?size=1024x1024&quality=96&sign=38589b1a8a876c2796ef79f1fab05059&type=album',
                    picture: 'https://cdn.shazoo.ru/351151_Z0bYpFdK6E_8010ba67_497b_4038_9c6e_f9b0fa9c.jpg',
                },
                {
                    id: 2,
                    time: 'сегодня в 9 утра',
                    post: 'Посмотрел "Твое Имя", мне понравилось',
                    user: 'Gena Daun',
                    avatar: 'https://sun9-75.userapi.com/impg/aYFVgULQds2uRK4ftm0VLGIE2pI63Pua3beoPg/d1vQS_fajKI.jpg?size=695x1056&quality=96&sign=e5baf9a52d7ac0e40e6a4fe9b9338c4c&type=album',
                    picture: 'https://www.mirf.ru/wp-content/uploads/2020/09/update_1___multi_sourced_4k__kimi_no_na_wa_by_assassinwarrior_dajydsn-fullview.jpg',
                },
                {
                    id: 3,
                    time: 'вчера в 12 ночи',
                    post: 'Всем привет, я посмотрел жожо, кто пойдет играть в тим форстрес?? А еще мать в канаве моя',
                    user: 'Pavel Palov',
                    avatar: 'https://sun9-44.userapi.com/impg/UACJRHqPtJbLkJ0-VD5mB4N7QZc1z5lMli1gyA/CCQgY0fVx8Y.jpg?size=810x1080&quality=96&sign=a0025252fa6bb8f7f6b5b55a9719902e&type=album',
                    picture: 'https://cdn.shazoo.ru/c800x360/308676_lBgur9s5CP_cherry.jpg',
                },
                {
                    id: 4,
                    time: 'позавчера',
                    post: 'Я русский хуле',
                    user: 'Maks Voin',
                    avatar: 'https://sun9-41.userapi.com/impg/QiItVXppdk3B8LT7Yd31GixhGUoETDPGeS82UQ/-gHFtJx41Uc.jpg?size=1080x1350&quality=96&sign=2035d42234fdc4238f96632232064a4b&type=album',
                    picture: 'https://cdni.rbth.com/rbthmedia/images/2020.07/original/5f1e888885600a2608563f65.jpg',
                },
                {
                    id: 5,
                    time: 'ну он просто лох',
                    post: 'я бабизян че тут сказать',
                    user: 'Sergey Ga4ibyan',
                    avatar: 'https://sun9-44.userapi.com/impg/3ueMAfcHjkVqJK_R-QFh2Vy3fb5voGKMOZFGBA/LEmwuBvrp0g.jpg?size=1440x2160&quality=96&sign=51dab95706014952c015588c5c4f3bbc&type=album',
                    picture: 'https://icdn.lenta.ru/images/2021/01/20/16/20210120164051128/wide_4_3_ad0a8dedf4f24c1002d87743b6451b83.jpg',
                },
                {
                    id: 6,
                    time: 'пару лет назал',
                    post: 'я трахнул твою мать',
                    user: 'Nikita Kesыrev',
                    avatar: 'https://sun9-23.userapi.com/impg/qjKg0gKdIBW-1YKG9dVgh68dCnD1mPjrUqQvgg/Bh8eNjyakC0.jpg?size=512x384&quality=96&sign=89f25cbca2cdc38325352d639a4a7e51&type=album',
                    picture: 'https://sun9-82.userapi.com/impg/ziamtmx6MeWC86P94nk9X4L2SLpjv0dZGL3M8A/w0n8GaVm8RQ.jpg?size=952x916&quality=96&sign=cf73c41996bb64455764b18ebbfbdd63&type=album',
                }
            ],

        },
    },

    _reRenderAllTree() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._reRenderAllTree = observer;
    },


    dispatch(action) {

        this._state = profileReducer(this._state, action)
        this._state.dialogs = dialogReducer(this._state.dialogs, action)
        this._state.musics = musicReducer(this._state.musics, action)
        this._state.friends = friendsReducer(this._state.friends, action)

        this._reRenderAllTree(this._state);
    }
}






    window.store = store;