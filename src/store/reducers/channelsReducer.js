const initialState = {
    channelList: []
}

export default function channelsReducer(state = initialState, action) {
    switch(action.type) {
        case "CHANNELS_FETCH_DATA_SUCCESS":
            return {...state, channelList: action.payload}
        default:
            return state;
    }
}