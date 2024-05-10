import { makeObservable, observable } from 'mobx';
import { inject, injectable } from '@servicetitan/react-ioc';
import { CountriesApi, CountryModel } from './countries.api';

@injectable()
export class CountriesStore {
    @observable countries: CountryModel[] = [];
    @observable isLoading = true;

    constructor(
        @inject(CountriesApi)
        private readonly countriesApi: CountriesApi
    ) {
        makeObservable(this);

        this.fetchWeather();
    }

    fetchWeather = async () => {
        const response = await this.countriesApi.getCountries();

        console.log(response);

        this.countries = response;
    };
}
