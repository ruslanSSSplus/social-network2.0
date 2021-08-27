import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '1c389392-606e-42a1-8d6e-0ba8e47b4434'
    }
});



export const usersAPI = {
    getUsers(currentPage =1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getUsersFriends(){
        return instance.get(`users`)
            .then(response => {
                return response.data
            })
    },


    getProfilePhoto(){
    return instance.get(`profile/9`)
        .then(response => {
            return response.data
        })
},
    getUnfollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getFollow(id){
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId){
        console.warn('obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    },

}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe=false, captcha = null){
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logOut(){
        return instance.delete('auth/login')
    }

}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}




export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/`+ userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile){
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile){
        return instance.put(`profile`, profile)
    }
}