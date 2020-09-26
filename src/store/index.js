
import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import images from './modules/images'


//Connect Middleware
Vue.use(Vuex);


//Create Store
export default new Vuex.Store({
	modules:{
		auth,
		images,
	}
});
