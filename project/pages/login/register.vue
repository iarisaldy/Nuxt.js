<template>
  <div class="container">
      <div class="row justify-content-center">
      <div class="col-xl-8 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
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
                                <a href="javascript:void(0)" @click="submit" class="btn btn-primary btn-user btn-block">Register Account</a>
                            <hr>
                            </form>
                            <!-- <div class="text-center">
                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                            </div> -->
                            <div class="text-center">
                                <nuxt-link class="small" to="/login">Already have an account? Login!</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    auth: false,
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
                role: '',
                status: '1'
            }
        }
    },
    methods:{
        ...mapActions('user',['storeUsersData']),
        submit(){
            this.storeUsersData(this.users)
            this.$router.push('/login')
        }
    }
}
</script>
