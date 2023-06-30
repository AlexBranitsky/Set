import axios from "axios"
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '99fb8d69-6f94-4d8c-a51d-4ff30cb4fbd3' },
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    }, 
    unFollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    
    getProfile(userId){
        console.warn('Please use profileApi')
        return profileAPI.getProfile(userId)
    },
}
export const profileAPI = {
    
    getProfile(userId){
        return instance.get(`profile/`+userId)
    },
    getUserStatus(userId){
        return instance.get(`profile/status/`+userId)
    },
    updateUserStatus(status){
        return instance.put(`profile/status`,{status:status})
    }
}


export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
}