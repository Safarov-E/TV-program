import React, {Component, lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import Spinner from '../Spinner';
import './app.css';

const ChannelTopics = lazy(() => import('../channel-topics'));
const ChannelsList = lazy(() => import('../channels-list'));
const ChannelListItem = lazy(() => import('../channel-list-item'));

class App extends Component {
    render() {
        return (
            <Switch>
                <Suspense fallback={<div style={{width: '1200px', margin: '20px auto'}}><Spinner/></div>}>
                    <Route path="/" exact component={ChannelTopics} />
                    <Route path="/:thid" exact component={ChannelsList} />
                    <Route path="/:thid/:xvid" exact component={ChannelListItem} />
                </Suspense>
                <Route component={() => <h1>Page Not Found</h1>} />
            </Switch>
        )
    }
}

export default App;