import React from 'react';
import { Link } from 'react-router-dom';

class BizUserItem extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.logout();
    }

    titleize(string){
        if (string.length === 0) {
            return ""
        } else {
            return (string.charAt(0).toUpperCase() + string.slice(1))
        }
    }
    
    render(){
        const headerUserButtonDiv = (!!this.props.currentUser) ? (
            <div className="header-user-button-container">
                <div className="header-user-item item-mark"> 
                    {this.titleize(this.props.currentUser.firstname)} {this.titleize(this.props.currentUser.lastname)}
                </div>
                <div className="header-user-button-2" onClick={this.handleClick}>
                    <span>
                        Logout
                    </span>
                </div>
            </div>
        ) : (
            <div className="header-user-button-container">
                <Link to="/login" className="header-user-button-1">
                    <span>
                        Log In
                    </span >
                </Link >
                <Link to="/signup" className="header-user-button-2">
                    <span>
                        Sign Up
                    </span>
                </Link>
            </div >
        );
        
        return(
            <div className="header-user-items">
                <div className="header-user-items-container">
                    <div className="header-user-item-container">
                        <div className="header-user-item">For Businesses</div>
                    </div>
                    <div className="header-user-item-container">
                        <div className="header-user-item">Write a Review</div>
                    </div>
                    {headerUserButtonDiv}
                </div>
            </div>
        )
    }
}

export default BizUserItem;
