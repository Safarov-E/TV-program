import channelsListReducer from './channelsList';
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
    it('adding channel themes', () => {
        const newState = channelsListReducer(state, action);
        expect(newState.channelList.length).toBe(1);
        expect(newState.channelList).toEqual(listChannelsThemes);
    })
    it('the spinner stopped spinning', () => {
        const newState = channelsListReducer(state, action);
        expect(newState.loading).toBe(false);
    })
    it('should return default state', () => {
        const newState = channelsListReducer(state, {});
        expect(newState.channelList).toEqual([]);
        expect(newState.loading).toEqual(true);
    })
})