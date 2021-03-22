import React, {Component} from 'react';
import {connect} from 'react-redux';
import { channelsListFetchData } from '../../store/actions/channelsList';
import GroupList from '../group-list';
import Spinner from '../spinner';
import ChannelsListItem from '../channel-list-item';
import './channel-list.css';

class ChannelList extends Component {
    componentDidMount() {
        this.props.fetchData(this.props.match.params.thid);
    }
    render() {
        const {channels, loading} = this.props;
        return (
            <>
                <GroupList />
                <div className="view-all-channels">
                    <div className="view-channels">
                        <h2>Список всех телеканалов</h2>
                        <div className="list-channels-item">
                            <ul>
                                {
                                    loading ? <Spinner /> :
                                    channels.map((item, index) => {
                                        return <ChannelsListItem 
                                                    key={index}
                                                    logo={item.logo}
                                                    title={item.title}
                                                    thid={this.props.match.params.thid}
                                                    xvid={item.xvid}
                                                />
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        channels: state.channelsList.channelList,
        loading: state.channelsList.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(channelsListFetchData(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);