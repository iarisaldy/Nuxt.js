<template>
  <div class="container">
    <!-- Outer Row -->
      <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-12 col-md-9">
              <div class="card o-hidden border-0 shadow-lg my-5">
                  <div class="card-body p-0">
                      <!-- Nested Row within Card Body -->
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="p-5">
                                  <div class="text-center">
                                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                  </div>
                                  <form class="user">
                                      <div class="form-group">
                                          <input type="email" class="form-control form-control-user"
                                              id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." v-model="auth.email">
                                      </div>
                                      <div class="form-group">
                                          <input type="password" class="form-control form-control-user"
                                              id="exampleInputPassword" placeholder="Password" v-model="auth.password">
                                      </div>
                                      <div class="form-group">
                                          <div class="custom-control custom-checkbox small">
                                              <input type="checkbox" class="custom-control-input" id="customCheck">
                                              <label class="custom-control-label" for="customCheck">Remember
                                                  Me</label>
                                          </div>
                                      </div>
                                      <a href="javascript:void(0)" @click="submit" class="btn btn-primary btn-user btn-block">
                                          Login
                                      </a>
                                  </form>
                                  <hr>
                                    <!-- <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div> -->
                                    <div class="text-center">
                                        <nuxt-link class="small" to="/login/register">Create an Account!</nuxt-link>
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
import {mapMutations} from 'vuex'
export default {
    auth: false,
	data(){
		return{
			auth:{
				email:null,
				password:null
			}
		}
	},
    mounted(){
        if(this.$auth.loggedIn){
            this.$router.push('/')
            this.SET_IS_AUTH(true)
        }else{
        this.SET_IS_AUTH(false)
        }
    },
	methods:{
        ...mapMutations(['SET_IS_AUTH']),
		async submit(){
           await this.$auth.loginWith('local', {
                 data: {
                     email:this.auth.email,
                     password:this.auth.password 
                 }
            }).then(()=>{
                console.log(this.$auth.$state.user.api_token)
                this.SET_IS_AUTH(true)
                this.$router.push('/')
            })
        }
	}
}
</script>
