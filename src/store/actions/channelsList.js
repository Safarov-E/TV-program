import {CHANNELS_LIST_FETCH_DATA_SUCCESS} from './action-types';
import APP_CONFIG from '../../config';

export function channelsListFetchDataSuccess(channels) {
    return {
        type: CHANNELS_LIST_FETCH_DATA_SUCCESS,
        payload: channels
    }
}

export function channelsListFetchData(thid) {
    return (dispatch) => {
        fetch(`${APP_CONFIG.baseUrl}/channel/list?domain=perm&thid=${thid}`)
            .then(response => {
                if(!response.ok) throw new Error(response.statusText)

                return response;
            })
            .then(response => response.json())
            .then(channels => dispatch(channelsListFetchDataSuccess(channels)))
    }
}