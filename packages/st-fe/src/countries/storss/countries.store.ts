import { CountriesApi, CountryModel } from '../apis/countries.api';
import { injectable } from '@servicetitan/react-ioc';
import { action, computed, makeObservable, observable, runInAction } from 'mobx';

@injectable()
export class CountriesStore {
    @observable isLoading = false;

    @observable countries: CountryModel[] = [];

    @observable sortByField: keyof CountryModel = 'id';

    @observable q = '';

    constructor(private countriesApi: CountriesApi) {
        makeObservable(this);
    }

    @computed
    get countriesCount() {
        console.log('run countriesCount');
        return this.countries.length;
    }

    @action
    setSortByField = (field: keyof CountryModel) => {
        this.sortByField = field;
    };

    get sortedCountries() {
        console.log('run sortedCountries');
        return [...this.countries]
            .filter(x => x.name.toLowerCase().includes(this.q.toLowerCase()))
            .sort((a, b) => {
                return a[this.sortByField] > b[this.sortByField] ? 1 : -1;
            });
    }

    loadCountries = async () => {
        runInAction(() => {
            console.log('--1');
            this.countries = [];
            console.log('--2');
            this.q = '';
            console.log('--3');
        });

        const response = await this.countriesApi.getCountries();

        runInAction(() => {
            this.isLoading = false;
            this.countries = response.data.map(x => ({ ...x, population: +(x.population ?? 0) }));
        });
    };
}
