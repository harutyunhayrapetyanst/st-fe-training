import { Button, Headline, Mask, Page, Stack } from '@servicetitan/design-system';
import { CountriesTable } from './countries-table';
import { provide, useDependencies } from '@servicetitan/react-ioc';
import { CountriesStore } from '../storss/countries.store';
import { CountriesApi } from '../apis/countries.api';
import { observer } from 'mobx-react';
import { SortingButtons } from './sorting-buttons';

export const CountriesPage = provide({
    singletons: [CountriesStore, CountriesApi],
})(
    observer(() => {
        const [countriesStore] = useDependencies<[CountriesStore]>(CountriesStore);

        const handleClick = () => {
            countriesStore.loadCountries();
        };
        return (
            <Page header={<Headline>Countries</Headline>}>
                <Mask active={countriesStore.isLoading}>
                    <Stack spacing={2} direction="column">
                        <Stack.Item>
                            <Button onClick={handleClick}>Load Counties</Button>
                        </Stack.Item>
                        <SortingButtons />
                        <CountriesTable />
                    </Stack>
                </Mask>
            </Page>
        );
    })
);
