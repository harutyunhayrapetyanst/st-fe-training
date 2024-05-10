import { CountryModel } from '../apis/countries.api';
import { makeObservable } from 'mobx';

export class CountriesStore {
    countries: CountryModel[] = [];

    isLoading = false;

    constructor() {
        makeObservable(this);
    }

    loadCountries = async () => {};
}
