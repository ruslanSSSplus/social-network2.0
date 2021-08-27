import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state= {


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

    profile: null,
    status: ''
}




it('length of posts should be incremented', () => {
    // action
    let action = addPostActionCreator('loh228')
    // test data

    let newState = profileReducer(state, action)

    // expectation
    expect(newState.posts.length).toBe(6)
});

it('length of posts should be decremented', () => {
    // action
    let action = deletePost(1)
    // test data


    let newState = profileReducer(state, action)

    // expectation
    expect(newState.posts.length).toBe(4)
});