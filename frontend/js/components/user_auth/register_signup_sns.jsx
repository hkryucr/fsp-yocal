import React from 'react';
import 'css/components/register_signup_sns.css';
import 'css/core/ui_font.css';
import { faFacebook, faGoogle, faYelp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'css/core/ui_font.css';
import { login } from 'actions/session_actions';

class RegisterSignupSNS extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "GuestUser@gmail.com",
            password: "GuestUser"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.processForm(login(this.state))
    }

    render(){
        return(
            <div className="register-signup-SNS">
                {/* <button className="fb-button small-medium">
                    <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }} />
                    <span> {this.props.formType} with Facebook </span>
                </button>
                <button className="g-button small-medium">
                    <img className="g-button-img" src={window.googleIcon}/>
                    <span>{this.props.formType} with Google </span>
                </button> */}
                <button className="d-button small-medium" onClick={this.handleClick}>
                    {/* <img className="g-button-img" src={window.googleIcon} /> */}
                    <FontAwesomeIcon className='g-button-fai' icon={faYelp} size="2x" color="#f43939"/>
                    <span> {this.props.formType} With Guest User Account</span>
                </button>
                <div className="small">Don't worry, we never post without your permission.</div>
            </div>
        )
    }
}

export default RegisterSignupSNS;
