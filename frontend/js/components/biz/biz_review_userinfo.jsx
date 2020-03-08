import React from 'react';
import { faUserFriends, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'css/components/biz/biz_review_userinfo.css';

class BizReviewUserinfo extends React.Component {
    render() {
        return (
            <div className="biz-review-userinfo">
                <div className="biz-review-userinfo-container">
                    <div className="biz-review-userinfo-photo">
                        <img src="assets/empty_profile.png"/>
                    </div>
                    <div className="userinfo-content">
                        <div className="userinfo-content-name">Cheryl B.</div>
                        <div className="userinfo-content-location">Oakland, CA</div>
                        <div className="userinfo-content-friends">
                            <FontAwesomeIcon icon={faUserFriends} color="#f15c00" />
                            <span>1</span> 
                            <span>friend</span> 
                        </div>
                        <div className="userinfo-content-reviews">
                            <FontAwesomeIcon icon={faStarHalfAlt} color="#f15c00" />
                            <span>1</span>
                            <span>review</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BizReviewUserinfo;
