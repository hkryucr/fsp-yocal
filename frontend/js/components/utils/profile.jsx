import React from 'react';
import { Link } from 'react-router-dom';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserInfo from 'js/components/utils/userinfo';
import 'css/components/utils/profile.css';

class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            showDropDown: false,
        }
        this.showDropDown = this.showDropDown.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    titleize(string) {
        if (string.length === 0) {
            return ""
        } else {
            return (string.charAt(0).toUpperCase() + string.slice(1))
        }
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout();
    }

    showDropDown(e) {
        e.preventDefault();

        this.setState({ showDropDown: true }, () => {
            document.addEventListener('click', this.closeDropDown);
        });
    }

    closeDropDown(e) {
        if ( this.dropDown != undefined && !this.dropDown.contains(e.target)) {
            this.setState({ showDropDown: false }, () => {
                document.removeEventListener('click', this.closeDropDown);
            });
        }
    }

    render(){
        if (this.props.currentUser === undefined) {
            return (
                <div className="profile">
                    <Link to="/login" className="profile-item medium">Log In</Link>
                    <Link to="/signup" className="profile-item medium signup-button">Sign Up</Link>
                </div>
            )
        } else {
            return (
                <div className="profile">
                    <div className="profile-greeting medium">Hello, {this.titleize(this.props.currentUser.firstname)} {this.titleize(this.props.currentUser.lastname)}!</div>
                    <div className="profile-img" onClick={this.showDropDown}> 
                        <img src={this.props.currentUser.photoUrl} />
                        <div className="profile-dropdown-white">
                            <FontAwesomeIcon icon={faCaretDown} style={{ color: '#fff', opacity: '0.75' }} />
                        </div>
                    </div>

                    {
                        this.state.showDropDown
                            ? (
                                <div className="profile-dropdown" ref={(element) => { this.dropDown = element }}>
                                    <div className="arrow up"></div>
                                    <div className="profile-user">
                                        <UserInfo currentUser={this.props.currentUser}/>
                                    </div>
                                    <div className="profile-item medium signup-button" onClick={this.handleClick}>Log Out</div>
                                </div>
                            )
                            : (
                                null
                            )
                    }

                </div>
            );
        }

    }
}

export default Profile;
