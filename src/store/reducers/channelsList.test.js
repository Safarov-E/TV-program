import channelsListReducer from './channelsList';
import {CHANNELS_LIST_FETCH_DATA_SUCCESS} from '../actions/action-types';
import {channelsListFetchDataSuccess} from '../actions/channelsList';

const listChannelsThemes = [
    {"chid":"7483","title":"7tv","biglogo":null,"logo":"/chlogo/1561102637.png","description":"Российский развлекательный телеканал. В эфире психологические, мистические, детективные фильмы и сериалы, документальные программы об устройстве Вселенной, программы о психологии и психологические ток-шоу.","url":"http://7-tv.tv/","hd":"0","thid":"1","display":"3","xvid":"3783","button":"34","bids":"10,26,29,28,58,59,60,90,91,92,101"}
]

describe('checking the work of reducer', () => {
    let action, state;
    beforeEach(() => {
        action = channelsListFetchDataSuccess(listChannelsThemes);
        state = {
            channelList: [],
            loading: true
        } 
    })
    it('channelsListFetchDataSuccess', () => {
        expect(channelsListFetchDataSuccess(listChannelsThemes)).toEqual({
            type: CHANNELS_LIST_FETCH_DATA_SUCCESS,
            payload: listChannelsThemes
        });
    })
    it('CHANNELS_LIST_FETCH_DATA_SUCCESS', () => {
        const actionCreator = {
            type: CHANNELS_LIST_FETCH_DATA_SUCCESS,
            payload: listChannelsThemes
        }
        const newState = channelsListReducer(state, actionCreator);
        expect(newState).toEqual({
            ...newState,
            loading: false,
            channelList: actionCreator.payload
        });
    })
    it('adding channel themes', () => {
        const newState = channelsListReducer(state, action);
        expect(newState.channelList.length).toBe(1);
        expect(newState.channelList).toEqual(listChannelsThemes);
    })
    it('the spinner stopped spinning', () => {
        const newState = channelsListReducer(state, action);
        expect(newState.loading).toBe(false);
        expect(newState.loading).toBeFalsy();
    })
    it('should return default state', () => {
        const newState = channelsListReducer(state, {});
        expect(newState.channelList).toEqual([]);
        expect(newState.loading).toEqual(true);
        expect(newState.loading).toBeTruthy();
    })
})