import {ProfileType} from "../Types/Types";
import {instance, savePhotoType, ThreeParamsType} from "./api";

export const profileAPI = {
    getProfile(userId: number | null){
        return instance.get<ProfileType>(`profile/`+ userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus(status: string) {
        return instance.put<ThreeParamsType>(`profile/status`, {status: status})
    },
    savePhoto(photoFile: File){
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<savePhotoType>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>res.data)
    },
    saveProfile(profile: ProfileType){
        return instance.put<ThreeParamsType>(`profile`, profile)
    }
}