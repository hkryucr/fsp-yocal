import React from 'react';
import Profile from 'js/components/utils/profile';

class MainSectionHeader extends React.Component{

    modalClick(){
        const modal = document.getElementById("modal");
        const moodelBackground = document.getElementById("modal-background");
        modal.classList.toggle("closed");
        moodelBackground.classList.toggle("closed");
    }

    render(){
        return (
            <div className="main-section-container-header">
                <div className="main-section-container-header-left">
                    <div className="main-section-container-header-item medium" onClick={this.modalClick}>Write a Review</div>
                    <div className="main-section-container-header-item medium" onClick={this.modalClick}>Events</div>
                    <div className="main-section-container-header-item medium" onClick={this.modalClick}>Talk</div>
                </div>
                <Profile currentUser={this.props.currentUser} logout={this.props.logout}/>
            </div>
        )
    }
}

export default MainSectionHeader;
