import { render } from 'react-dom';
import { App } from './app';

declare global {
    export interface Window {
        App: any;
        AppUser: any;
    }
}

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

render(<App />, appContainer);
