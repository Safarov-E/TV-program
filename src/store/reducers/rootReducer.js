import {combineReducers} from 'redux';
import channelTopics from './channelTopicsReducer';
import channelsList from './channelsList';

const rootReducer = combineReducers({
    channelTopics,
    channelsList
})

export default rootReducer;