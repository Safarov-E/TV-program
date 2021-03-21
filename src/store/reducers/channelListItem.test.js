import channelsListItemReducer from './channelListItem';
import {channelsListItemFetchDataSuccess} from '../actions/channelListItem';

const listChannelsThemes = {
    "3783":[{"xvid":"3783","start":"2021-03-20 00:00:00","duration":"3900","title":"Закрытая школа [16+]","desc":"В замкнутом мире героев все переживания намного острее, чем в обычной школьной жизни. Несмотря на внешнее благополучие, ребята, оторванные от дома, очень ранимы и зачастую одиноки. Очень скоро ребята узнают, что правда гораздо страшнее легенд","icon":"2441795?size=560x315","tid":"363"}]
}

describe('checking the work of reducer', () => {
    let action, state;
    beforeEach(() => {
        action = channelsListItemFetchDataSuccess(listChannelsThemes);
        state = {
            channelList: [],
            loading: true
        } 
    })
    it('the spinner stopped spinning', () => {
        const newState = channelsListItemReducer(state, action);
        expect(newState.loading).toBe(false);
    })
    it('should return default state', () => {
        const newState = channelsListItemReducer(state, {});
        expect(newState.channelList).toEqual([]);
        expect(newState.loading).toEqual(true);
    })
})