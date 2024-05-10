import axios, { AxiosRequestConfig } from 'axios';
import { injectable } from '@servicetitan/react-ioc';

@injectable()
export class OpenWeatherApi {
    private baseUrl = 'https://api.openweathermap.org';
    private apiKey = '1dfcb79d9bdef9d31189c29497fb1718';

    getWeather(lat: number, lon: number) {
        //lat={lat}&lon={lon}&exclude={part}&appid={API key}

        let options = <AxiosRequestConfig>{
            baseURL: this.baseUrl,
            url: '/data/2.5/weather',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            params: {
                lat,
                lon,
                appid: this.apiKey,
            },
        };

        return axios.request(options);
    }
}

export interface WeatherModel {
    coord: Coord;
    weather: Weather[];
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
}
