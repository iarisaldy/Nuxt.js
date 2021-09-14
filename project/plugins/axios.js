export default function ({$axios, store}){
    $axios.setHeader('Content-Type','application/json')
    $axios.setHeader('token','Bearer')
}