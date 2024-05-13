import { useDependencies } from '@servicetitan/react-ioc';
import { CountriesStore } from '../storss/countries.store';
import { observer } from 'mobx-react';

export const CountriesTable = observer(() => {
    const [countriesStore] = useDependencies<[CountriesStore]>(CountriesStore);

    return (
        <table cellPadding={10} cellSpacing={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>Population</th>
                </tr>
            </thead>
            <tbody>
                {countriesStore.sortedCountries.map(country => (
                    <tr key={country.id}>
                        <td>{country.id}</td>
                        <td>{country.name}</td>
                        <td>{country.capital ?? '-'}</td>
                        <td>{country.population}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
});
