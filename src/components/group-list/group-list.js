import React, {Component} from 'react';
import {connect} from 'react-redux';
import { channelsFetchData } from '../../store/actions/channels';
import { channelsListFetchData } from '../../store/actions/channelsList';
import GroupListItem from '../group-list-item';
import Spinner from '../spinner';
import './group-list.css';

class GroupList extends Component {
    componentDidMount() {
        this.props.fetchData()
    }
    listOfChannels = (thid) => {
        this.props.channelList(thid);
    }
    render() {
        const {channels, loading} = this.props;
        return (
            <div className="channel-list">
                <div className="channel-list-group">
                    <h2>Темы каналов</h2>
                    <div className="channel-list__slider">
                        <ul>
                            {
                                loading ? <Spinner /> :
                                channels.map((item, index) => {
                                    return <GroupListItem 
                                        key={index}
                                        listOfChannels={this.listOfChannels}
                                        thid={item.thid}
                                        name={item.name}
                                    />
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        channels: state.channelTopics.channelList,
        loading: state.channelTopics.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(channelsFetchData(url)),
        channelList: thid => dispatch(channelsListFetchData(thid))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);