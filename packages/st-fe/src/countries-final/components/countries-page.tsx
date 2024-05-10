import { Button, Headline, Mask, Page, Stack } from '@servicetitan/design-system';
import { provide, useDependencies } from '@servicetitan/react-ioc';
import { CountriesStore } from '../stores/countries.store';
import { CountriesTable } from './countries-table';
import { CountriesApi } from '../apis/countries.api';
import { observer } from 'mobx-react';
import { SortButtons } from './sort-buttons';

export const CountriesPage = provide({ singletons: [CountriesStore, CountriesApi] })(
    observer(() => {
        const [countriesStore] = useDependencies<[CountriesStore]>(CountriesStore);

        return (
            <Page header={<Headline>Countries</Headline>}>
                <Mask active={countriesStore.isLoading}>
                    <Stack spacing={2} direction="column">
                        <Stack.Item>
                            <Button onClick={countriesStore.loadCountries}>Load Counties</Button>
                        </Stack.Item>
                        <SortButtons />
                        <CountriesTable />
                    </Stack>
                </Mask>
            </Page>
        );
    })
);
