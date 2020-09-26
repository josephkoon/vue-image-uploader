
import api from '../../api/imgur'

import { router } from '../../main'


//Initialize State
const state = {
	images:[],
}


const getters = {

	allImages: (state) => {
		return state.images
	}
 
}


const actions = {

	fetchImages: async ({commit, rootState}) => {
		//Get token
		const token = rootState.auth.token

		//API fetch image
		const response = await api.fetchImages(token)

		//Update image list
		commit('setImages', response.data.data)
	},


	uploadImages: async ({rootState}, images) => {
		//Get token
		const token = rootState.auth.token

		//Call API module to do upload
		await api.uploadImages(images, token)

		//Redirect to ImageList
		router.push('/')

	},

}


const mutations = {

	setImages: (state, images) => {
		state.images = images
	}
	
}


export default {
	state,
	getters,
	actions,
	mutations,
}

