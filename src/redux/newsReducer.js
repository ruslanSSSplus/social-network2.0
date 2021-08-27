

let initialState = {
    new: [
        {
            id: 1,
            time: 'сегодня в 11 утра',
            post: 'Вчера посмотрел атаку титанов',
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
            post: 'Всем привет',
            user: 'Pavel Palov',
            avatar: 'https://sun9-44.userapi.com/impg/UACJRHqPtJbLkJ0-VD5mB4N7QZc1z5lMli1gyA/CCQgY0fVx8Y.jpg?size=810x1080&quality=96&sign=a0025252fa6bb8f7f6b5b55a9719902e&type=album',
            picture: 'https://i.pinimg.com/originals/3c/8f/9a/3c8f9ad07c5f305354cdf087cf1d580c.jpg',
        },
        {
            id: 4,
            time: 'позавчера',
            post: 'Я русский ',
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
    ]

}
export const getNewMassiv = () => { return initialState.new;}

const newsReducer = (state = initialState, action) => {


            return state;


}

export default newsReducer;