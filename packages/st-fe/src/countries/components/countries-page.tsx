import { Button, Headline, Mask, Page, Stack } from '@servicetitan/design-system';
import { CountriesTable } from './countries-table';

export const CountriesPage = () => {
    const handleClick = () => {};
    return (
        <Page header={<Headline>Countries</Headline>}>
            <Mask active={false}>
                <Stack spacing={2} direction="column">
                    <Stack.Item>
                        <Button onClick={handleClick}>Load Counties</Button>
                    </Stack.Item>

                    <CountriesTable />
                </Stack>
            </Mask>
        </Page>
    );
};
