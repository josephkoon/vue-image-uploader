
import qs from 'qs'
import axios from 'axios'


//const CLIENT_SECRET = 'bd5adc7663065d38f4f93eb4dff45a05d75667b4'
const CLIENT_ID = '89e2b75cccd98b7'
const ROOT_URL = `https://api.imgur.com`



export default {

	//Redirect to login url
	login() {
		const querystring = {
			client_id:CLIENT_ID,
			response_type:'token'
		}

		window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
	},


	//Get images
	fetchImages(token) {
		return axios.get(`${ROOT_URL}/3/account/me/images`, {
			headers:{
				Authorization:`Bearer ${token}`
			}
		})
	},


	//Upload images
	uploadImages(images, token) {
		//Iterate over images. Make form data. Post to API.
		const promises = Array.from(images).map(image => {
			const formData = new FormData()
			formData.append('image', image)

			return axios.post(`${ROOT_URL}/3/image`, formData, {
				headers:{
					Authorization:`Bearer ${token}`
				}
			})
		})


		//Wait for all promises to resolve
		return Promise.all(promises)
	}


}




