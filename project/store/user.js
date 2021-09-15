export const state = () => ({
    users:[]
})

export const mutations = {     
    SET_USER_DATA(state , payload){
    state.users = payload
    } 
}

export const actions = {
    getUsersData({commit}){
        return new Promise((resolve, reject)=>{
            this.$axios.get('/users').then((response)=>{
                commit('SET_USER_DATA', response.data.data)
                resolve()
            })
        })
    },
    storeUsersData({commit},payload){
        return new Promise((resolve, reject)=>{
            this.$axios.post('/users',payload)
            .then((response)=>{
                resolve()
                commit('SET_USER_DATA', response.data.data)
            })
            .catch((error) =>{
            })
        })
    }
}