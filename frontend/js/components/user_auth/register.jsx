import React from 'react';
import 'css/components/register.css';
import 'css/core/ui_font.css';
import RegisterSignup from 'js/components/user_auth/register_signup';

class Register extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="register">
                <div className="register-container">
                    <div className="register-start">
                        <RegisterSignup formType={this.props.formType} processForm={this.props.processForm} history={this.props.history}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;