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
                                    return <li key={index}>
                                            <span>{item.start.substring(11, 16)}</span>
                                            <p>{item.title}</p>
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