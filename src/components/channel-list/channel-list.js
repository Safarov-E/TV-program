import React, {Component} from 'react';
import {connect} from 'react-redux';
import { channelsFetchData } from '../../store/actions/channels';
import './channel-list.css';

class ChannelList extends Component {
    componentDidMount() {
        this.props.fetchData("http://epg.domru.ru/channeltheme/list")
    }
    render() {
        const {channels} = this.props;
        return (
            <div className="channel-list">
                <div className="channel-list-group">
                    <ul>
                        {
                            channels.map((item, index) => {
                                return <li key={index}>{item.name}</li>
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
        channels: state.channels.channelList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(channelsFetchData(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);