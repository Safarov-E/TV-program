export function channelsListFetchDataSuccess(channels) {
    return {
        type: "CHANNELS_LIST_FETCH_DATA_SUCCESS",
        payload: channels
    }
}

export function channelsListFetchData(thid = 1) {
    return (dispatch) => {
        fetch(`https://epg.domru.ru/channel/list?domain=perm&thid=${thid}`)
            .then(response => {
                if(!response.ok) throw new Error(response.statusText)

                return response;
            })
            .then(response => response.json())
            .then(channels => dispatch(channelsListFetchDataSuccess(channels)))
    }
}