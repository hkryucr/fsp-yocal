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
        this.handPasswordClick = this.handPasswordClick.bind(this);
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

    handPasswordClick(e){
        e.preventDefault()
        document.getElementsByClassName("input-password-meter-wrapper")[0].classList.add('proress-bar-container-show');
    }

    componentDidMount(){
        $('.input-wrapper input, .input-wrapper-name input').focus(
            function () {
                $(this).parent('div').css('border-color', '#7dbef1');
                $(this).parent('div').css('box-shadow', '0 0 10px #7dbef1');
                
            }).blur(
            function () {
                $(this).parent('div').css('border-color', '#666');
                $(this).parent('div').css('box-shadow', 'none');
            }
        );

        const evals = {
            0: "Password must be at least 6 characters in length",
            1: "Password strength: Weak",
            2: "Please try adding a symbol (!#@) and letter (A-Z)",
            3: "Password strength: Good",
            4: "Password strength: Great"
        }

        const password = document.getElementById('password');
        const meter = document.getElementById('password-strength-meter');
        const text = document.getElementById('password-strength-text');

        password.addEventListener('input', function () {
            const val = password.value;
            const result = zxcvbn(val);            
            meter.value = result.score;

            if (val !== "") {
                text.innerHTML = evals[result.score];
            } else {
                text.innerHTML = "";
            }
        });
    }

    render() {        
        const form = (this.props.formType === 'Sign Up') ? (
            <form className="RS-form" onSubmit={this.handleSubmit(this.props.formType)}>
                <ul>
                    <label className="firstname-label">
                        <div className="input-wrapper-name">
                            <input type="text" placeholder="First Name" required minLength="1" onChange={this.update('firstname')} />
                        </div>
                    </label>
                    <label className="lastname-label">
                        <div className="input-wrapper-name">
                            <input type="text" placeholder="Last Name" required minLength="1" onChange={this.update('lastname')} />
                        </div>
                    </label>
                </ul>
                <label>
                    <div className="input-wrapper" tabIndex="0">
                        <input type="email" placeholder="Email" required minLength="2" onChange={this.update('email')} />
                    </div>
                </label>
                <label htmlFor="password">
                    <div className="input-wrapper" tabIndex="0">
                        <input pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" type="password" id="password" name="password" required onChange={this.update('password')} placeholder="Password" onClick={this.handPasswordClick}/>
                    </div>
                    <div className="input-password-meter-wrapper">
                        <div className="progress-bar-container">
                            <meter min="0" max="4" id="password-strength-meter"></meter>
                        </div>
                        <div className="progress-bar-helper" id="password-strength-text">
                        </div>
                    </div>
                </label>
                <label className="zipcode-label">
                    <div className="input-wrapper" tabIndex="0">
                        <input type="text" placeholder="ZIP Code" required minLength="1" onChange={this.update('zipcode')} />
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
                        <input type="email" placeholder="Email" required minLength="1" onChange={this.update('email')} />
                    </div>
                </label>
                <label>
                    <div className="input-wrapper">
                        {/* <input type="password" placeholder="Password" required minLength="6" onChange={this.update('password')} /> */}
                        <input pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" type="password" id="password" name="password" required onChange={this.update('password')} placeholder="Password"/>
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