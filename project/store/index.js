export const state = () => ({
    isAuth:false
})

export const mutations = {     
    SET_IS_AUTH(state , payload){
    state.isAuth = payload
    } 
}

export const actions = {
    nuxtServerInit({commit},context){
        if(context.route.name='login'){
            commit('SET_IS_AUTH', false) 
            console.log('ok')
       }else{
            commit('SET_IS_AUTH', true)
           console.log('error')
       }
        console.log(context.route.name)
    }
}