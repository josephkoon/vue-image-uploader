

<template>
	<div class='ui secondary pointing menu'>
		<router-link to='/' class='active item'>Image Storage</router-link>

		<div class='right menu'>
			<div v-if='isLoggedIn' class='horizontal'>
				<router-link to='/' class='item'>Galleries</router-link>
				<router-link to='/upload' class='item'>Upload</router-link>
				<a @click='logout' class='item'>Logout</a>
			</div>
			<a v-else @click='login' href='#' class='ui item'>Login</a>
		</div>
	</div>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'

export default {
	name:'AppHeader',

	//Actions
	methods: {
		...mapActions(['login', 'logout']),
	},

	//Getter - automatically run 
	computed: {
		...mapGetters(['isLoggedIn']),
	}
}
</script>


<style scoped>
.horizontal {
	display:flex;
	flex-direction:row;
}

</style>