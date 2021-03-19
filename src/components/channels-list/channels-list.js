import React, {Component} from 'react';
import {connect} from 'react-redux';
import { channelsListFetchData } from '../../store/actions/channelsList';
import ChannelTopics from '../channel-topics';
import './channels-list.css';

class ChannelsList extends Component {
    componentDidMount() {
        this.props.fetchData(this.props.match.params.thid)
    }
    render() {
        const {channels} = this.props;
        return (
            <>
                <ChannelTopics />
                <div className="view-all-channels">
                    <div className="view-channels">
                        <h2>Список всех телеканалов</h2>
                        <div className="list-channels-item">
                            <ul>
                                {
                                    channels.map((item, index) => {
                                        return <li key={index}>
                                            <img src={"http://epg.domru.ru" + item.logo} />
                                            <p>{item.title}</p>
                                        </li>
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
        channels: state.channelsList.channelList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(channelsListFetchData(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);