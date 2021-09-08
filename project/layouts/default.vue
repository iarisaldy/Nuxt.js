<template >
  <div id="wrapper">
	  <app-sidebar v-if="$auth.loggedIn"></app-sidebar>
	    <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
				<app-header v-if="$auth.loggedIn"></app-header>
    			<Nuxt />
			</div>
			<app-footer v-if="$auth.loggedIn"></app-footer>
		</div>
  </div>
</template>

<script>
	import Sidebar from '@/components/layouts/Sidebar.vue'
	import Header from '@/components/layouts/Header.vue'
	import Footer from '@/components/layouts/Footer.vue'
	export default {
		data(){
			return{
			}		
		},
		computed:{
		},
		components:{
			'app-sidebar' : Sidebar,
			'app-header' : Header,
			'app-footer' : Footer
		}
	}
</script>