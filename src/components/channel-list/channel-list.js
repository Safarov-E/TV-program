import React, {Component} from 'react';
import {connect} from 'react-redux';
import { channelsFetchData } from '../../store/actions/channels';
import './channel-list.css';

class ChannelList extends Component {
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
    render() {
        const {channels} = this.props;
        const {left} = this.state;
        console.log(left)
        return (
            <div className="channel-list">
                <div className="channel-list-group">
                    <div className="channel-list-slider">
                        <h2>Темы каналов</h2>
                        <div className="action-button-slider">
                            <button 
                                onClick={this.sliderLeft} 
                                className="slider-arrow-left" 
                                title="Предыдущий слайд"></button>
                            <button 
                                onClick={this.sliderRight} 
                                className="slider-arrow-right"
                                title="Следующий слайд"></button>
                        </div>
                    </div>
                    <div className="channel-list__slider">
                        <ul style={{left: left + 'px'}}>
                            {
                                channels.map((item, index) => {
                                    return <li key={index}>{item.name}</li>
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
        channels: state.channels.channelList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(channelsFetchData(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);