import { Headline, Page } from '@servicetitan/design-system';
import { provide } from '@servicetitan/react-ioc';
import { CountriesStore } from '../stores/countries.store';
import { CountriesTable } from './countries-table';
import { CountriesApi } from '../apis/countries.api';

export const CountriesPage = provide({ singletons: [CountriesStore, CountriesApi] })(() => {

    return (
        <Page header={<Headline>Countries</Headline>}>
            <CountriesTable />
        </Page>
    );
});
