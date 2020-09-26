
<template>
	<div>
		Please wait...
	</div>
</template>


<script>
import {mapActions} from 'vuex'

export default {
	name:'AuthHandler',
	
	methods: {
		...mapActions(['finalizeLogin']),
	},

	//Initial data loading
	created() {
		this.finalizeLogin(window.location.hash)
	},
}
</script>


<style>
</style>