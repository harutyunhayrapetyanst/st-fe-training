import { FC } from 'react';
import { Loader } from '@servicetitan/web-components';

export const StFeTraining: FC = () => {
    const src = 'http://localhost:9009';
    return <Loader src={src} data={{}} />;
};
