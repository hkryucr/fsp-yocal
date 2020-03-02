import React from 'react';
import css from 'css/components/user_auth_header.css';

class UserAuthHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="UA-header">
                <div className="UA-logo">
                    <img src="/assets/yelp_logo.png" className="UA-logo-image" alt="" />
                </div>
            </div>
        )
    }
}

export default UserAuthHeader;