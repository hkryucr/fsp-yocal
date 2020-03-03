import React from 'react';

import 'css/components/register_signup_form.css';
import 'css/core/ui_base_button.css';
import { signup, login } from 'actions/session_actions';

class RegisterSignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            zipcode: "",
            birthday: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(processForm){
        return (e) => {
            e.preventDefault();
            if (processForm === 'Sign Up'){
                this.props.processForm(signup(this.state))
            } else if (processForm === 'Log In'){
                this.props.processForm(login(this.state))
            }
        }
    }

    update(field){
        return (e)=>{
            this.setState({
                [field]: e.target.value
            })
        }
    }

    render() {        
        const form = (this.props.formType === 'Sign Up') ? (
            <form className="RS-form" onSubmit={this.handleSubmit(this.props.formType)}>
                <ul>
                    <label className="firstname-label">
                        <div className="input-wrapper-name">
                            <input type="text" placeholder="First Name" onChange={this.update('firstname')} />
                        </div>
                    </label>
                    <label className="lastname-label">
                        <div className="input-wrapper-name">
                            <input type="text" placeholder="Last Name" onChange={this.update('lastname')} />
                        </div>
                    </label>
                </ul>
                <label>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Email" onChange={this.update('email')} />
                    </div>
                </label>
                <label>
                    <div className="input-wrapper">
                        <input type="password" placeholder="Password" onChange={this.update('password')} />
                    </div>
                </label>
                <label className="zipcode-label">
                    <div className="input-wrapper">
                        <input type="text" placeholder="ZIP Code" onChange={this.update('zipcode')} />
                    </div>
                </label>
                <ul className="birthday">
                    <label className="birthday-label">
                        <div className="birthday-header small-medium">
                            <div>Birthday</div>
                            <div className="small">Optional</div>
                        </div>
                        <div className="input-wrapper">
                            <input type="date" placeholder="Month" onChange={this.update('birthday')} />
                        </div>
                    </label>
                </ul>
                <span className="x-small">
                    You also understand that Yelp may send marketing emails about Yelp’s products, services, and local events. You can unsubscribe at any time.
                </span>
                <button className="ui-button">{this.props.formType}</button>
            </form>
        ) : (
            <form className="RS-form" onSubmit={this.handleSubmit(this.props.formType)}>
                <label>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Email" onChange={this.update('email')} />
                    </div>
                </label>
                <label>
                    <div className="input-wrapper">
                        <input type="password" placeholder="Password" onChange={this.update('password')} />
                    </div>
                </label>
                <button className="ui-button">{this.props.formType}</button>
            </form>
        );

        return (
            <div className="register-signup-form">
                {form}
            </div>
        )
    }
}

export default RegisterSignupForm;