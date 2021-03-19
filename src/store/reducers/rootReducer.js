import {combineReducers} from 'redux';
import channelTopics from './channelTopicsReducer';
import channelsList from './channelsList';
import channelListItem from './channelListItem';

const rootReducer = combineReducers({
    channelTopics,
    channelsList,
    channelListItem
})

export default rootReducer;