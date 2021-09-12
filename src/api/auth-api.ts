import {getAuthType, instance, loginType, ThreeParamsType} from "./api";

export const authAPI = {
    getAuth() {
        return instance.get<getAuthType>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe=false, captcha: null | string = null){
        return instance.post<loginType>('auth/login', {email, password, rememberMe, captcha})
    },
    logOut(){
        return instance.delete<ThreeParamsType>('auth/login')
    }

}