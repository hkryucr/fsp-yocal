import { Link } from 'react-router-dom';
import React from 'react';

const MainSectionHeader = (props) => {

    const titleize = (string)=>{
        if(string.length === 0){
            return ""
        } else {
            return (string.charAt(0).toUpperCase() + string.slice(1))
        }
    }

    const handleClick = (e)=>{
        e.preventDefault();
        props.logout();
    }

    let loginDiv;
    if (props.currentUser === undefined){
        loginDiv = (
            <div className="main-section-container-header-right">
                <Link to="/login" className="main-section-container-header-item medium">Log In</Link>
                <Link to="/signup" className="main-section-container-header-item medium signup-button">Sign Up</Link>
            </div>
        )
    } else {
        loginDiv = (
            <div className="main-section-container-header-right">
                <div className="main-section-container-header-greeting medium">Hello, {titleize(props.currentUser.firstname)} {titleize(props.currentUser.lastname)} !</div>
                <div className="main-section-container-header-item medium signup-button" onClick={handleClick}>Log Out</div>
            </div>
        );
    }
        
    return (
        <div className="main-section-container-header">
            <div className="main-section-container-header-left">
                <div className="main-section-container-header-item medium">Write a Review</div>
                <div className="main-section-container-header-item medium">Events</div>
                <div className="main-section-container-header-item medium">Talk</div>
            </div>
            {loginDiv}
        </div>
    )
}

export default MainSectionHeader;
