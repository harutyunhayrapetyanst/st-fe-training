import axios, { AxiosRequestConfig } from 'axios';
import { injectable } from '@servicetitan/react-ioc';

@injectable()
export class CountriesApi {
    baseUrl = 'https://api.sampleapis.com';

    getCountries(): Promise<CountryModel[]> {
        const url = '/countries/countries';

        let options = <AxiosRequestConfig>{
            baseURL: this.baseUrl,
            url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            params: {},
        };

        return axios.request(options);
    }
}

export interface CountryModel {
    abbreviation: string;
    capital: string;
    currency: string;
    name: string;
    phone: string;
    population: number;
    media: Media;
    id: number;
}

export interface Media {
    flag: string;
    emblem: string;
    orthographic: string;
}
