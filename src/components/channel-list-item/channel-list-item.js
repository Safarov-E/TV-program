import React, {Component} from 'react';
import APP_CONFIG from '../../config';
import {Link} from 'react-router-dom';

class ChannelsListItem extends Component {
    render() {
        const {logo, title, thid, xvid} = this.props;
        return (
            <li>
                <img src={APP_CONFIG.baseUrl + logo} alt={title} />
                <Link to={'/' + thid + '/' + xvid}>{title}</Link>
            </li>
        )
    }
}

export default ChannelsListItem;