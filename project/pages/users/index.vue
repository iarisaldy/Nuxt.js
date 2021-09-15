<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">
                   Table Data User
                </h4>
            </div>
            <div class="card-body">
                <b-table striped hover :items="users.data" :fields="fields" show-empty>
                    <template v-slot:cell(role)="row">
                        <p>{{row.item.role === '1' ? 'Users':'Admin'}}</p>   
                    </template>
                    <template v-slot:cell(action)>
                        <button class="btn btn-primary"><i class="fa fa-edit"></i></button> 
                        <button class="btn btn-danger"><i class="fa fa-trash"></i></button>  
                    </template>
                </b-table>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
    async asyncData({store}){
        await Promise.all([
            store.dispatch('user/getUsersData')
        ])
        return
    },
    data(){
		return{
			fields:['name','address','email','phone_number','role','action'],
            items:[]
		}
    },
    computed:{
	    ...mapState('user',{
            users:state => state.users
        })
	}
}
</script>
