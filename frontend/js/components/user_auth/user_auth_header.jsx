import React from 'react';
import { Link } from 'react-router-dom';
import 'css/components/user_auth_header.css';

class UserAuthHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="UA-header">
                <Link to="/" className="UA-logo">
                    <img src="/assets/yelp_logo.png" className="UA-logo-image"/>
                </Link>
            </div>
        )
    }
}

export default UserAuthHeader;
