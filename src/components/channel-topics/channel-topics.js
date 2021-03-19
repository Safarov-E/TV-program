import React, {Component} from 'react';
import {connect} from 'react-redux';
import { channelsFetchData } from '../../store/actions/channels';
import { channelsListFetchData } from '../../store/actions/channelsList';
import {NavLink} from 'react-router-dom'
import './channel-topics.css';

class ChannelTopics extends Component {
    state = {
        left: 0,
        right: 0,
    }
    componentDidMount() {
        this.props.fetchData("http://epg.domru.ru/channeltheme/list")
    }
    sliderLeft = () => {
        if(this.state.left >= -900){
            this.setState(({left}) => {
                return {left: left - 102}
            })
        }
    }
    sliderRight = () => {
        if(this.state.left < 0) {
            this.setState(({left}) => {
                return {left: left + 102}
            })
        }
    }
    listOfChannels = (thid) => {
        this.props.channelList(thid)
    }
    render() {
        const {channels} = this.props;
        const {left} = this.state;
        return (
            <div className="channel-list">
                <div className="channel-list-group">
                    <div className="channel-list-slider">
                        <h2>Темы каналов</h2>
                        <div className="action-button-slider">
                            <button 
                                onClick={this.sliderRight} 
                                className="slider-arrow-right"
                                style={{border: "1px solid " + (left === 0 ? "#545454" : "#fff")}}
                                title="Следующий слайд"></button>
                            <button 
                                onClick={this.sliderLeft} 
                                className="slider-arrow-left" 
                                style={{border: "1px solid " + (left === -918 ? "#545454" : "#fff")}}
                                title="Предыдущий слайд"></button>
                        </div>
                    </div>
                    <div className="channel-list__slider">
                        <ul style={{left: left + 'px'}}>
                            {
                                channels.map((item, index) => {
                                    return <li key={index}>
                                        <NavLink to={"/" + item.thid} onClick={() => this.listOfChannels(item.thid)}>{item.name}</NavLink>
                                    </li>
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
        channels: state.channelTopics.channelList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(channelsFetchData(url)),
        channelList: thid => dispatch(channelsListFetchData(thid))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelTopics);