import React from 'react';
import 'css/components/register.css';
import { Link } from 'react-router-dom';

const RegisterSwitch = (props)=> {
    const linkDiv = ((props.formType) === 'Log In') ? (
        <Link to="/signup" className="small register-switch-link">Sign Up</Link>
    ) : (
        <Link to="/login" className="small register-switch-link">Log In</Link>
    ) 
    return (
        <div className="register-switch">
            <span className="small register-switch-text">{(props.formType) === 'Log In' ? 'New to Yelp?' : 'Already on Yelp?'}</span>
            {linkDiv}
        </div>
    )
}

export default RegisterSwitch;