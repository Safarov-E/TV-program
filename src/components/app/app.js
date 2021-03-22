import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import Spinner from '../spinner';
import './app.css';

const GroupList = lazy(() => import('../group-list'));
const ChannelList = lazy(() => import('../channel-list'));
const ProgramList = lazy(() => import('../program-list'));

const App = () => {
    return (
        <Switch>
            <Suspense fallback={<Spinner/>}>
                <Route path="/" exact component={GroupList} />
                <Route path="/:thid" exact component={ChannelList} />
                <Route path="/:thid/:xvid" exact component={ProgramList} />
            </Suspense>
            <Route component={() => <h1>Page Not Found</h1>} />
        </Switch>
    )
}

export default App;