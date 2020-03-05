import React from 'react';
import 'css/components/register_signup_sns.css';
import 'css/core/ui_font.css';
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'css/core/ui_font.css';

class RegisterSignupSNS extends React.Component{
    render(){
        return(
            <div className="register-signup-SNS">
                <button className="fb-button small-medium">
                    <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }} />
                    <span> {this.props.formType} with Facebook </span>
                </button>
                <button className="g-button small-medium">
                    <img className="g-button-img" src={window.googleIcon}/>
                    <span>{this.props.formType} with Google </span>
                </button>
                <div className="small">Don't worry, we never post without your permission.</div>
            </div>
        )
    }
}

export default RegisterSignupSNS;
