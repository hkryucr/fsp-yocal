import React from 'react';
import RegisterSignupHeader from 'js/components/user_auth/register_signup_header'
import RegisterSignupSNS from 'js/components/user_auth/register_signup_SNS';
import 'css/components/register_signup.css';

class RegisterSignup extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="register-signup">
                <div className="register-signup-container">
                    <RegisterSignupHeader />
                    <RegisterSignupSNS/>
                    {/* <RegisterSignupForm/> */}
                </div>
            </div>
        )
    }
}

export default RegisterSignup;