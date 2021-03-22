import React, {Component} from 'react';
import {connect} from 'react-redux';
import {channelsListItemFetchData} from '../../store/actions/channelListItem';
import Spinner from '../spinner';
import ProgramListItem from '../program-list-item'
import './program-list.css';

class ProgramList extends Component {
    componentDidMount() {
        const date = new Date();
        const currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        this.props.fetchData(currentDate, this.props.match.params.xvid);
    }
    getStringFromTime = (time) => {
        let out = "";
        const h = time.getHours();
        const m = time.getMinutes();

        out += ((h < 10) ? ("0" + h) : h) + ":";
        out += ((m < 10) ? ("0" + m) : m);
        return out;
    }
    render() {
        const {channels, loading, match} = this.props;
        return (
            <div className="tv-programm__chanels-item">
                    <div className="tv-programm__channel">
                        <ul>
                            {
                                loading || typeof channels[match.params.xvid] === 'undefined' ? <Spinner /> :
                                channels[this.props.match.params.xvid].map((item, index) => {
                                    const startProgram = new Date(item.start);
                                    const duration = +item.duration;

                                    const curretTime = (new Date()).getTime() / 1000;
                                    const start = startProgram.getTime() / 1000;
                                    const end = start + duration;
                                    const currentProgress = (curretTime - start) * (100 / duration);
                                    const isCurrentProgram = curretTime >= start && curretTime <= end

                                    return <ProgramListItem
                                                key={index}
                                                startProgram={this.getStringFromTime(startProgram)}
                                                title={item.title}
                                                currentProgress={currentProgress}
                                                curretTime={isCurrentProgram}
                                            />
                                })
                            }
                        </ul>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        channels: state.channelListItem.channelListItem,
        loading: state.channelListItem.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (currentDate, xvid) => dispatch(channelsListItemFetchData(currentDate, xvid))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgramList);