const initialState = {
    channelListItem: [],
    loading: true
}

export default function channelsListItemReducer(state = initialState, action) {
    switch(action.type) {
        case "CHANNELS_LIST_ITEM_FETCH_DATA_SUCCESS":
            return {...state, channelListItem: action.payload, loading: false}
        default:
            return state;
    }
}