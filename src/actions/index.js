import axios from 'axios';

const API_KEY = '2c61dc8aac9985bd62374c0af4a39d93';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},au`;
    const request = axios.get(url); 

    //axios return a promise.  
    //console.log('Request:', request);
	
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}