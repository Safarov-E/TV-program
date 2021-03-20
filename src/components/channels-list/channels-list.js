import React, {Component} from 'react';
import {connect} from 'react-redux';
import { channelsListFetchData } from '../../store/actions/channelsList';
import ChannelTopics from '../channel-topics';
import Spinner from '../Spinner'
import {Link} from 'react-router-dom';
import './channels-list.css';

class ChannelsList extends Component {
    componentDidMount() {
        this.props.fetchData(this.props.match.params.thid)
    }
    render() {
        const {channels, loading} = this.props;
        return (
            <>
                <ChannelTopics />
                <div className="view-all-channels">
                    <div className="view-channels">
                        <h2>Список всех телеканалов</h2>
                        <div className="list-channels-item">
                            <ul>
                                {
                                    loading ? <Spinner /> :
                                    channels.map((item, index) => {
                                        return <li key={index}>
                                            <img src={"http://epg.domru.ru" + item.logo} alt="logo" />
                                            <Link to={'/' + this.props.match.params.thid + '/' + item.xvid}>{item.title}</Link>
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
        channels: state.channelsList.channelList,
        loading: state.channelsList.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(channelsListFetchData(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);