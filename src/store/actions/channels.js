import {CHANNELS_FETCH_DATA_SUCCESS} from './action-types';
import APP_CONFIG from '../../config';

export function channelsFetchDataSuccess(channels) {
    return {
        type: CHANNELS_FETCH_DATA_SUCCESS,
        payload: channels
    }
}

export function channelsFetchData() {
    return (dispatch) => {
        fetch(`${APP_CONFIG.baseUrl}/channeltheme/list`)
            .then(response => {
                if(!response.ok) throw new Error(response.statusText)

                return response;
            })
            .then(response => response.json())
            .then(channels => dispatch(channelsFetchDataSuccess(channels)))
    }
}