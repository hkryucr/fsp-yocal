import React from 'react';
import 'css/components/user_auth_body.css';
import UserAuthImage from 'js/components/user_auth/user_auth_image';
import Register from 'js/components/user_auth/register';

class UserAuthBody extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="UA-body">
                <div className="UA-body-container">
                    <div className="UA-body-layout">
                        <Register/>                        
                        <UserAuthImage/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserAuthBody;
