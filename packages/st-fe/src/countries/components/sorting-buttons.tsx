import { Button, Form, Stack } from '@servicetitan/design-system';
import { useDependencies } from '@servicetitan/react-ioc';
import { CountriesStore } from '../storss/countries.store';
import { ChangeEvent } from 'react';

export const SortingButtons = () => {
    const [countriesStore] = useDependencies<[CountriesStore]>(CountriesStore);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        countriesStore.q = e.target.value;
    };
    return (
        <Stack>
            <Button onClick={() => countriesStore.setSortByField('name')}>Sort by name</Button>
            <Button onClick={() => countriesStore.setSortByField('population')}>
                Sort by population
            </Button>
            <Form>
                <Form.Input onChange={handleChange} />
            </Form>
        </Stack>
    );
};
