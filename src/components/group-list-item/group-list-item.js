import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class GroupListItem extends Component {
    render() {
        const {thid, listOfChannels, name} = this.props;
        return (
            <li>
                <NavLink to={"/" + thid} onClick={() => listOfChannels(thid)}>{name}</NavLink>
            </li>
        )
    }
} 
export default GroupListItem;