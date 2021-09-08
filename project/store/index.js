export const state = () => ({
    isAuth:false
})

export const mutation = {     
    SET(state , payload){
    state.isAuth = payload 
    } 
}