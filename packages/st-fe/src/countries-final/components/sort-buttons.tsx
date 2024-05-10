import { Button, Stack } from '@servicetitan/design-system';
import { observer } from 'mobx-react';
import { useDependencies } from '@servicetitan/react-ioc';
import { CountriesStore } from '../stores/countries.store';

export const SortButtons = observer(() => {
    const [countriesStore] = useDependencies<[CountriesStore]>(CountriesStore);
    return (
        <Stack spacing={1}>
            <Button onClick={() => countriesStore.setSortByField('id')}>Sort by Id</Button>
            <Button onClick={() => countriesStore.setSortByField('name')}>Sort by Name</Button>
            <Button onClick={() => countriesStore.setSortByField('capital')}>
                Sort by Capital
            </Button>
            <Button onClick={() => countriesStore.setSortByField('population')}>
                Sort by Population
            </Button>
        </Stack>
    );
});
