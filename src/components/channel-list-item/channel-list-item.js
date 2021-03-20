import React, {Component} from 'react';
import {connect} from 'react-redux';
import {channelsListItemFetchData} from '../../store/actions/channelListItem';
import ChannelTopics from '../channel-topics';
import './channel-list-item.css';

class ChannelListItem extends Component {
    componentDidMount() {
        this.props.fetchData(this.props.match.params.xvid)
    }
    render() {
        const {channels} = this.props;
        return (
            <>
                <ChannelTopics />
                <div className="tv-programm__chanels-item">
                    <div className="tv-programm__channel">
                        <ul>
                            {
                                typeof channels[this.props.match.params.xvid] === 'undefined' ?
                                <div>Loading...</div> :
                                channels[this.props.match.params.xvid].map((item, index) => {
                                    const startProgram = new Date(item.start);
                                    const duration = +item.duration;
                                    const h = startProgram.getHours();
                                    const m = startProgram.getMinutes();
                                    const hours = h < 10 ? ("0" + h) : h
                                    const minutes = m < 10 ? ("0" + m) : m

                                    const curretTime = Math.floor((new Date()).getTime() / 1000);
                                    const start = startProgram.getTime() / 1000;
                                    const end = start + duration;
                                    const currentProgress = 100 - ((end - curretTime) / (duration * 0.1));

                                    return <li key={index}>
                                                <div className="program__list-link">
                                                    <span>{hours}:{minutes}</span>
                                                    <p>{item.title}</p>
                                                </div>
                                                {curretTime >= start && curretTime <= end ? 
                                                <div className="program__list-item-progress">
                                                    <div className="program__list-item-progress-bar" style={{width: `${currentProgress}%`}}></div>
                                                </div>
                                                : null}
                                            </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        channels: state.channelListItem.channelListItem
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: xvid => dispatch(channelsListItemFetchData(xvid))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelListItem);