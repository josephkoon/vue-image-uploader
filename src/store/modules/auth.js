
import api from '../../api/imgur'
import qs from 'qs'

import { router } from '../../main'



//Initialize State
const state = {
	token:window.localStorage.getItem('imgur_token'),
}


const getters = {

	//Return token as true/false
	isLoggedIn: (state) => {
		return !!state.token
	},

}


const actions = {

	//Call API login redirect
	login: () => {
		api.login()
	},

	//Get access token from querystring
	finalizeLogin: ({commit}, hash) => {
		const query = qs.parse(hash.replace('#', ''))
		commit('setToken', query.access_token)
		window.localStorage.setItem('imgur_token', query.access_token)

		router.push('/')
	},

	//Call setToken mutation with null
	logout: ({commit}) => {
		commit('setToken', null)
		window.localStorage.removeItem('imgur_token')
	}

}


const mutations = {

	//Changes token
	setToken: (state, token) => {
		state.token = token
	}

}


export default {
	state,
	getters,
	actions,
	mutations,
}






