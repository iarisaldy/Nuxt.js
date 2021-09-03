<template>
  <div id="wrapper">
	  <app-sidebar v-if="isAuth"></app-sidebar>
	    <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
				<app-header v-if="isAuth"></app-header>
    			<Nuxt />
			</div>
			<app-footer v-if="isAuth"></app-footer>
		</div>
  </div>
</template>

<script>
	import Sidebar from '@/components/layouts/Sidebar.vue'
	import Header from '@/components/layouts/Header.vue'
	import Footer from '@/components/layouts/Footer.vue'
	import {mapState} from 'vuex'

	export default {
		data(){
			return{
				//isAuth:false
			}
		},
		computed:{
			...mapState(['isAuth'])
		},
		components:{
			'app-sidebar' : Sidebar,
			'app-header' : Header,
			'app-footer' : Footer
		}
	}
</script>