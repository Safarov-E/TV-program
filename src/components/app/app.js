import React, {Component} from 'react';
import ChannelTopics from '../channel-topics';
import ChannelsList from '../channels-list';
import {Route, Switch} from 'react-router-dom';
import './app.css';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={ChannelTopics} />
                <Route path="/:thid" exact component={ChannelsList} />
            </Switch>
        )
    }
}

export default App;