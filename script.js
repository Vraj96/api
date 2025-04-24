const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '48efc0fa66msh2bac87502a161f1p19b42ejsnfbf63d73b32b',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchData() {
	const response = await fetch(url,options);
	const result = await response.json();
	console.log(result);

}

fetchData();





// async function fetchData() {
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }

// fetchData();



