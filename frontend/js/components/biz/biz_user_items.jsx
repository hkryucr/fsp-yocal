import React from 'react';
import Profile from 'js/components/utils/profile.jsx';

class BizUserItem extends React.Component{
    constructor(props){
        super(props);
    }

    modalClick() {
        const modal = document.getElementById("modal");
        const moodelBackground = document.getElementById("modal-background");
        modal.classList.toggle("closed");
        moodelBackground.classList.toggle("closed");
    }

    render(){
        return(
            <div className="header-user-items">
                <div className="header-user-items-container">
                    <div className="header-user-item-container">
                        <div className="header-user-item" onClick={this.modalClick}>For Businesses</div>
                    </div>
                    <div className="header-user-item-container">
                        <div className="header-user-item">Write a Review</div>
                    </div>
                    <Profile currentUser={this.props.currentUser} logout={this.props.logout}/>
                </div>
            </div>
        )
    }
}

export default BizUserItem;
