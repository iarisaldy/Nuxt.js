<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">
                    <button class="btn btn-primary float-right btn-sm">
                        Add New
                    </button>
                </h4>
            </div>
            <div class="card-body">
                <b-table striped hover :items="items" :fields="fields" show-empty></b-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
		return{
			fields:['name','address','email','phone_number','role'],
            items:[]
		}
    }
}
</script>
