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
            this.$axios.get('').then((response)=>{
                commit('SET_USER_DATA', response.data.data)
                resolve()
            })
        })
    }
}