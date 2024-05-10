import { CountriesApi, CountryModel } from '../apis/countries.api';
import { injectable } from '@servicetitan/react-ioc';
import { computed, makeObservable, observable } from 'mobx';

@injectable()
export class CountriesStore {
    @observable isLoading = false;

    @observable countries: CountryModel[] = [];

    @observable sortByField: keyof CountryModel = 'id';

    constructor(private countriesApi: CountriesApi) {
        makeObservable(this);
    }

    setSortByField = (field: keyof CountryModel) => {
        this.sortByField = field;
    };

    @computed
    get sortedCountries() {
        return this.countries.slice().sort((a, b) => {
            if (a[this.sortByField] < b[this.sortByField]) {
                return -1;
            }
            if (a[this.sortByField] > b[this.sortByField]) {
                return 1;
            }
            return 0;
        });
    }

    loadCountries = async () => {
        this.isLoading = true;

        const response = await this.countriesApi.getCountries();

        this.isLoading = false;

        this.countries = response.data;
    };
}
