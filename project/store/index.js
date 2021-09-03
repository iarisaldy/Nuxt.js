export const state = () => ({
    isAuth:true,
    mutations: {
        SET_IS_AUTH(state, payload) {
          state.isAuth = payload;
        },
    }
})

export const mutation = {     
    SET_IS_AUTH(state , payload){
    state.isAuth = payload 
    } 
}

// export default new Vuex.Store({
//     state: {
//         isAuth:false
//     },
//     mutations: {
//         setAuth(state, payload) {
//         state.isAuth = payload;
//         }
//     }
// })