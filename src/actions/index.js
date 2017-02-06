import axios from 'axios';

const API_KEY = '461f0e8b2c9e670dd0a83e4e7728f749';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function feachWeather(city){

  const url =  `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

     return {
       type:FETCH_WEATHER,
       payload:request
     };
  }
