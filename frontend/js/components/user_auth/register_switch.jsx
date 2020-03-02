import React from 'react';
import 'css/components/register.css';
import { Link } from 'react-router-dom';

const RegisterSwitch = ()=> {
    return (
        <div className="register-switch">
            <span className="medium register-switch-text">Already on Yelp?</span>
            <Link to="/login" className="medium register-switch-link">Log in</Link>
        </div>
    )
}

export default RegisterSwitch;