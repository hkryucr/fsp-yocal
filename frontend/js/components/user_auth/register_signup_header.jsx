import React from 'react';
// import RegisterSignupHeader from 'js/components/user_auth/register_signup_header'
import 'css/components/register_signup_header.css';
import 'css/core/ui_font.css';

class RegisterSignupHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="register-signup-header">
                <div className="h5 header-title">Sign Up for Yelp</div>
                <div className="medium header-text">Connect with great local businesses</div>
                <div className="small-medium header-text-link">By continuing, you agree to Yelp’s Terms of Service and acknowledge Yelp’s Privacy Policy.</div>
                {/* <div className="register-signup-header-container">
                </div> */}
            </div>
        )
    }
}

export default RegisterSignupHeader;