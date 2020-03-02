import React from 'react';
import UserAuthHeader from 'js/components/user_auth/user_auth_header';
import UserAuthBody from 'js/components/user_auth/user_auth_body'

class UserAuth extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="UA">
                <UserAuthHeader/>
                <UserAuthBody/>
            </div>
        )
    }
}

export default UserAuth;