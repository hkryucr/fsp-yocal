import React from 'react';
import 'css/components/register.css';
import 'css/core/ui_font.css';
import RegisterSignup from 'js/components/user_auth/register_signup';
import RegisterSwitch from 'js/components/user_auth/register_switch';

class Register extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="register">
                <div className="register-container">
                    <div className="register-start">
                        <RegisterSignup/>
                        <RegisterSwitch/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;