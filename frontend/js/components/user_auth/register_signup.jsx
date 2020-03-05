import React from 'react';
import RegisterSignupHeader from 'js/components/user_auth/register_signup_header';
import RegisterSignupSNS from 'js/components/user_auth/register_signup_sns';
import RegisterSignupForm from 'js/components/user_auth/register_signup_form';
import RegisterSwitch from 'js/components/user_auth/register_switch';
import 'css/components/register_signup.css';
import 'css/core/ui_font.css';

class RegisterSignup extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="register-signup">
                <div className="register-signup-container">
                    <RegisterSignupHeader formType={this.props.formType}/>
                    <RegisterSignupSNS formType={this.props.formType}/>
                    <div className="register-signup-line">
                        <div></div>
                        <span className="medium">OR</span>
                        <div></div>
                    </div>
                    <RegisterSignupForm formType={this.props.formType} processForm={this.props.processForm} history={this.props.history}/>
                    <RegisterSwitch formType={this.props.formType} />
                </div>
            </div>
        )
    }
}

export default RegisterSignup;