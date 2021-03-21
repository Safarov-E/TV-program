import {CHANNELS_FETCH_DATA_SUCCESS} from '../actions/action-types';

const initialState = {
    channelList: [],
    loading: true
}

export default function channelsTopicsReducer(state = initialState, action) {
    switch(action.type) {
        case CHANNELS_FETCH_DATA_SUCCESS:
            return {...state, channelList: action.payload, loading: false}
        default:
            return state;
    }
}