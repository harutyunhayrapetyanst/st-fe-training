import { FC, StrictMode } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Frame, Page, Sidebar, SideNav } from '@servicetitan/design-system';
import { SideNavLinkItem } from '@servicetitan/link-item';

import './app.css';

import { StFeTraining } from './components/st-fe-training';
import * as Styles from './app.module.less';

export const App: FC = () => {
    return (
        <StrictMode>
            <HashRouter>
                <Frame>
                    <Page
                        className={Styles.mainPage}
                        sidebar={
                            <Sidebar localStorageKey="sidebar-application">
                                <Sidebar.Section padding="y">
                                    <SideNav title="Application">
                                        <SideNavLinkItem pathname="/">Fe Training</SideNavLinkItem>
                                    </SideNav>
                                </Sidebar.Section>
                            </Sidebar>
                        }
                        maxWidth="wide"
                    >
                        <Switch>
                            <Route path="/">
                                <StFeTraining />
                            </Route>
                        </Switch>
                    </Page>
                </Frame>
            </HashRouter>
        </StrictMode>
    );
};
