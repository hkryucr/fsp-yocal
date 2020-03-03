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
                <UserAuthBody formType={this.props.formType} processForm={this.props.processForm} history={this.props.history}/>
            </div>
        )
    }
}

export default UserAuth;