import React from 'react';
import Ratings from 'js/components/utils/ratings';
import 'css/components/biz/biz_review_content.css';
import { faLightbulb, faLaughSquint, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

class BizReviewContent extends React.Component {    
    render() {
        const multiLine = "Incredible incredible incredible experience! Such a beautiful place with delicious food. Our bartender was so bubbly and sweet, and made great drinks. \n Our waiter, Michael, was absolutely amazing! He was incredibly friendly and attentive.Had great suggestions and surprised us with a tasting of the clam chowder when we were unsure about which appetizer to decide on.The food was absolutely amazing.Definitely recommend the poke and the clam chowder as appetizers.For dinner, I got the scallop and crab risotto and my boyfriend got the filet with crab meat on top, spinach, and garlic mashed potatoes.So delicious!! Thank you Michael for a great experience!!";

        return (
            <div className="biz-review-content">
                <div className="biz-review-content-container">
                    <div className="biz-review-content-1">
                        <div className="biz-review-ratings">
                            <Ratings/>
                        </div>
                        <div className="biz-review-date">{this.props.review.reviewDate}</div>
                    </div>
                    <div className="biz-review-content-2">
                        {this.props.review.text}
                    </div>
                    <div className="biz-review-content-3">
                        <div className="useful">
                            <FontAwesomeIcon icon={faLightbulb } size="2x" />
                            <span> Useful {(this.props.review.useful === 0) ? null : this.props.review.useful}</span>
                        </div>
                        <div className="funny">
                            <FontAwesomeIcon icon={faLaughSquint} size="2x" />
                            <span> Funny {(this.props.review.funny === 0) ? null : this.props.review.funny}</span>
                        </div>
                        <div className="cool">
                            <FontAwesomeIcon icon={faThumbsUp} size="2x" />
                            <span> Cool {(this.props.review.cool === 0) ? null : this.props.review.cool} </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BizReviewContent;
