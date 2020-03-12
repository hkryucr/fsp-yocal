import React from 'react';
import Profile from 'js/components/utils/profile';

class MainSectionHeader extends React.Component{
    render(){
        return (
            <div className="main-section-container-header">
                <div className="main-section-container-header-left">
                    <div className="main-section-container-header-item medium">Write a Review</div>
                    <div className="main-section-container-header-item medium">Events</div>
                    <div className="main-section-container-header-item medium">Talk</div>
                </div>
                <Profile currentUser={this.props.currentUser} logout={this.props.logout}/>
            </div>
        )
    }
}

export default MainSectionHeader;
