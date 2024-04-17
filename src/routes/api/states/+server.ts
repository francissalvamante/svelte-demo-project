import { BASE_URL, API_KEY } from '$env/static/private';
import axios from 'axios';

export const GET = async ({ url }: { url: any }) => {
	const countryid = url.searchParams.get('countryid');
	const response = await axios({
		method: 'GET',
		url: `${BASE_URL}/countries/${countryid}/states`,
		headers: {
			'x-api-key': API_KEY
		}
	});

	return new Response(JSON.stringify(response.data));
};
