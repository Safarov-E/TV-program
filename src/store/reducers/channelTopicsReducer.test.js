import channelTopicsReducer from './channelTopicsReducer';
import {channelsFetchDataSuccess} from '../actions/channels';

const listChannelsThemes = [
    {"thid":"1","name":"Общедоступные","plural":"Общедоступные","alias":"polit","weight":"0"}
]

describe('checking the work of reducer', () => {
    let action, state;
    beforeEach(() => {
        action = channelsFetchDataSuccess(listChannelsThemes);
        state = {
            channelList: [],
            loading: true
        } 
    })
    it('adding channel themes', () => {
        const newState = channelTopicsReducer(state, action);
        expect(newState.channelList.length).toBe(1);
        expect(newState.channelList).toEqual(listChannelsThemes);
        expect(newState.channelList[0].thid).toBe("1");
        expect(newState.channelList[0].name).toBe("Общедоступные");
        expect(newState.channelList[0].plural).toBe("Общедоступные");
        expect(newState.channelList[0].alias).toBe("polit");
        expect(newState.channelList[0].weight).toBe("0");
    })
    it('the spinner stopped spinning', () => {
        const newState = channelTopicsReducer(state, action);
        expect(newState.loading).toBe(false);
    })
    it('should return default state', () => {
        const newState = channelTopicsReducer(state, {});
        expect(newState.channelList).toEqual([]);
        expect(newState.loading).toEqual(true);
    })
})