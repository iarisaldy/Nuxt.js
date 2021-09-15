<template>
    <form class="user">
        <div class="form-group">
            <label for="">Nama</label>
            <input type="text" class="form-control form-control-user" id="Name" placeholder="Name" v-model="users.name">
        </div>
        <div class="form-group">
            <label for="">UserID</label>
            <input type="text" class="form-control form-control-user" id="UserID" placeholder="UserID" v-model="users.identity_id">
        </div>
        <div class="form-group">
            <label for="">Jenis Kelamin</label>
            <select class="form-control" v-model="users.gender">
                <option value="">Pilih</option>
                <option value="1">Laki-Laki</option>
                <option value="0">Perempuan</option>
            </select>
        </div>
        <div class="form-group">
            <label for="">Alamat</label>
            <input type="text" class="form-control form-control-user" id="Alamat" placeholder="Alamat" v-model="users.address">
        </div>
        <div class="form-group">
            <label for="">Email</label>
            <input type="email" class="form-control form-control-user" id="Email" placeholder="Email Address" v-model="users.email">
        </div>
        <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control form-control-user" id="Password" placeholder="Password" v-model="users.password">
        </div>
        <div class="form-group">
            <label for="">No Telephone</label>
            <input type="password" class="form-control form-control-user" id="Telephone" placeholder="Telephone" v-model="users.phone_number">
        </div>
        <div class="form-group">
            <label for="">User Role</label>
            <select class="form-control" v-model="users.role">
                <option value="">Pilih</option>
                <option value="0">Admin</option>
                <option value="1">Users</option>
            </select>
        </div>
        <a href="javascript:void(0)" @click="submit" class="btn btn-primary btn-user btn-block">Update</a>
    <hr>
    </form>
</template>
<script>
export default {
data(){
        return{
            users:{
                name: '',
                identity_id: '',
                gender: '',
                address: '',
                email: '',
                Password: '',
                phone_number: '',
                role: ''
            }
        }
    },
    methods:{
        submit(){
            console.log(this.users)
        }
    }
}
</script>