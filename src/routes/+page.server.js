import { BASE_URL, API_KEY } from '$env/static/private';
import axios from 'axios';

export const load = async () => {
	const response = await axios({
		method: 'GET',
		url: `${BASE_URL}/countries`,
		headers: {
			'x-api-key': API_KEY
		}
	});

	return {
		countries: response.data
	};
};
