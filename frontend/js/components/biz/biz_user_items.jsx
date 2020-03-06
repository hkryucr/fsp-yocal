import React from 'react';
import { Link } from 'react-router-dom';

class BizUserItem extends React.Component{
    render(){
        return(
            <div className="header-user-items">
                <div className="header-user-items-container">
                    <div className="header-user-item-container">
                        <div className="header-user-item">For Businesses</div>
                    </div>
                    <div className="header-user-item-container">
                        <div className="header-user-item">Write a Review</div>
                    </div>
                    <div className="header-user-button-container">
                        <Link to="/login" className="header-user-button-1">
                            <span>
                                Log In
                            </span>
                        </Link>
                        <Link to="/signup" className="header-user-button-2">
                            <span>
                                Sign Up
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizUserItem;