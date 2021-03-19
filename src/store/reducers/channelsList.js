const initialState = {
    channelList: []
}

export default function channelsListReducer(state = initialState, action) {
    switch(action.type) {
        case "CHANNELS_LIST_FETCH_DATA_SUCCESS":
            return {...state, channelList: action.payload}
        default:
            return state;
    }
}