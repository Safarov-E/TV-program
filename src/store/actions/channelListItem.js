import {CHANNELS_LIST_ITEM_FETCH_DATA_SUCCESS} from './action-types';
import APP_CONFIG from '../../config';

export function channelsListItemFetchDataSuccess(channels) {
    return {
        type: CHANNELS_LIST_ITEM_FETCH_DATA_SUCCESS,
        payload: channels
    }
}

export function channelsListItemFetchData(currentDate, xvid) {
    return (dispatch) => {
        fetch(`${APP_CONFIG.baseUrl}/program/list?domain=perm&date_from=${currentDate}+00%3A00%3A00&date_to=${currentDate}+23%3A55%3A00&xvid=${xvid}`)
            .then(response => {
                if(!response.ok) throw new Error(response.statusText)

                return response;
            })
            .then(response => response.json())
            .then(channels => dispatch(channelsListItemFetchDataSuccess(channels)))
    }
}