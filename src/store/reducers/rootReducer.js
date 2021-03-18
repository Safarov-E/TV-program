import {combineReducers} from 'redux';
import channels from './channelsReducer';

const rootReducer = combineReducers({
    channels
})

export default rootReducer;