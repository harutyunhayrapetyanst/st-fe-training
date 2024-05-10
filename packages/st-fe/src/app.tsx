import { FC } from 'react';

import '@servicetitan/anvil-fonts/dist/css/anvil-fonts.css';
import '@servicetitan/design-system/dist/system.css';

import './styles.css';
import { Frame } from '@servicetitan/design-system';

import { CountriesPage } from './countries-final/components/countries-page';

export const App: FC = () => {
    return (
        <Frame>
            <CountriesPage />
        </Frame>
    );
};
