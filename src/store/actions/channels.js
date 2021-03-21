export function channelsFetchDataSuccess(channels) {
    return {
        type: "CHANNELS_FETCH_DATA_SUCCESS",
        payload: channels
    }
}

export function channelsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                console.log('response', response);
                if(!response.ok) throw new Error(response.statusText)

                return response;
            })
            .then(response => response.json())
            .then(channels => dispatch(channelsFetchDataSuccess(channels)))
    }
}