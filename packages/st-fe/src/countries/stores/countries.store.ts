import { CountriesApi } from '../apis/countries.api';
import { injectable } from '@servicetitan/react-ioc';

@injectable()
export class CountriesStore {
    isLoading = false;

    countries = [];

    constructor(private countriesApi: CountriesApi) {
        this.loadCountries();
    }

    loadCountries = async () => {
        this.isLoading = true;

        const response = await this.countriesApi.getCountries();

        this.isLoading = false;

        console.log(response);
    };
}
