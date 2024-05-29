import { FC } from 'react';

import './design-system.css';

import { Frame } from '@servicetitan/design-system';
import { StForm } from './form/components/st-form';

export const App: FC = () => {
    return (
        <Frame>
            <StForm />
        </Frame>
    );
};
