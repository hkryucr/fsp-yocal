import React from 'react';
import 'css/components/user_auth_body.css';
import 'css/core/ui_font.css';
import UserAuthImage from 'js/components/user_auth/user_auth_image';
import Register from 'js/components/user_auth/register';

class UserAuthBody extends React.Component {
    constructor(props) {
        super(props)
        this.removeError = this.removeError.bind(this);
    }

    removeError(e){
        e.preventDefault()
        this.props.fetchClearErrors();
    }

    render() {
        const errorDiv = (this.props.errors.session.length !== 0) ? (
            <div className="error-text-container">
                <div className="error-text-layout">
                    <div className="error-text">
                        {(!!this.props.errors.session) ? this.props.errors.session.join(" & ") : null}
                    </div>
                    <div className="error-x" onClick={this.removeError}>
                        X
                    </div>
                </div>
            </div>
        ) : null;
        
        return (
            <div className="UA-body">
                <div className="UA-body-container">
                    {errorDiv}
                    <div className="UA-body-layout">
                        <Register formType={this.props.formType} processForm={this.props.processForm} history={this.props.history}/>
                        <UserAuthImage/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserAuthBody;
