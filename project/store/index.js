export const state = () => ({
    isAuth:false,
    api_token : null
})

export const mutations = {     
    SET_IS_AUTH(state , payload){
    state.isAuth = payload
    },
    SET_API_TOKEN(state , payload){
    state.api_token = payload
    }
}

export const actions = {
    nuxtServerInit({commit},context){
        if(context.route.name='login'){
            commit('SET_IS_AUTH', false) 
       }else{
            commit('SET_IS_AUTH', true)
       }
    }
}